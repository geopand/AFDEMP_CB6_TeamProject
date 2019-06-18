/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.Message;
import com.project.coblood.models.MessageApi;
import com.project.coblood.models.User;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.sql.DataSource;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

/**
 *
 * @author admin
 */
@Component
public class MessageDaoImpl implements MessageDao {

    @PersistenceContext
    private EntityManager manager;

    @Autowired
    DataSource datasource;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    UserDaoImpl userService;

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(MessageDaoImpl.class);

    @Override
    public Message getMessage(int messageId) {

        //TODO exception
        List<Message> messagesList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM messages WHERE messages.messageId = ?";
            messagesList = jdbcTemplate.query(sql, new Object[]{messageId}, new MessageMapper());
        } catch (DataAccessException e) {
            //TODO
        }
        return messagesList.size() == 1 ? messagesList.get(0) : null;
    }

    @Override
    public ArrayList<Message> getAllMessages(String username) {

        int userId = userService.getUserIdByUsername(username);
        //TODO exception
        List<Message> messagesList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM messages WHERE messages.senderId = ? ORDER BY messages.dateInfo DESC";
            messagesList = jdbcTemplate.query(sql, new Object[]{userId}, new MessageMapper());
        } catch (DataAccessException e) {
            //TODO
        }
        return (ArrayList<Message>) messagesList;
    }

    @Override
    public int sendMessage(String sender, String receiver, String messageData) {

        int row;
        try {
            Message msg = new Message();
            int senderId = userService.getUserIdByUsername(sender);
            int receiverId = userService.getUserIdByUsername(receiver);
            msg.setSenderId(senderId);
            msg.setReceiverId(receiverId);
            msg.setMessageData(messageData);
            String sql = "insert into messages(senderId, receiverId, messageData) values(?,?,?)";
            row = jdbcTemplate.update(sql, new Object[]{msg.getSenderId(), msg.getReceiverId(), msg.getMessageData()});
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in sendMessage");
        }

        return row;
    }

    @Override
    public int deleteMessage(String user, int messageId) {

        int row = 0;
        String sql = "";
        Message msg = getMessage(messageId);
        int userId = userService.getUserIdByUsername(user);
        try {
            if (userId == msg.getSenderId()) {
                sql = "update messages set messages.deleteBySender = 1 where messages.messageId = ?";
                row = jdbcTemplate.update(sql, new Object[]{msg.getMessageId()});
            } else if (userId == msg.getReceiverId()) {
                sql = "update messages set messages.deleteByReceiver = 1 where messages.messageId = ?";
                row = jdbcTemplate.update(sql, new Object[]{msg.getMessageId()});
            } else if (userService.getUserByUsername(user).getRole().getRoleInt() == 1) {
                sql = "update messages set messages.deleteByAdmin = 1, messageData = ? where messages.messageId = ?";
                row = jdbcTemplate.update(sql, new Object[]{"*Deleted by Admin*", msg.getMessageId()});
            }
        } catch (DataAccessException e) {
            //TODO
            LOG.info("SQL error in deleteMessage");
        }
        return row;

    }

    @Override
    public int trashMessage(int messageId, String user) {

        int row = 0;
        Message msg = getMessage(messageId);
        int userId = userService.getUserIdByUsername(user);
        try {
            if (userId == msg.getSenderId()) {
                String sql = "update messages set messages.trashSender = 1 where messages.messageId = ?";
                row = jdbcTemplate.update(sql, new Object[]{msg.getMessageId()});
            }
            if (userId == msg.getReceiverId()) {
                String sql = "update messages set messages.trashReceiver = 1 where messages.messageId = ?";
                row = jdbcTemplate.update(sql, new Object[]{msg.getMessageId()});
            } else if (userService.getUserByUsername(user).getRole().getRoleInt() == 1) {
                String sql = "update messages set messages.messageData = ?, messages.trashSender = 1, messages.trashReceiver = 1  where messages.messageId = ?";
                row = jdbcTemplate.update(sql, new Object[]{"*Trashed by Admin*", msg.getMessageId()});
            }
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in trashMessage");
        }
        return row;

    }

    @Override
    public int readMessages(String username) {

        int row;
        int userId = userService.getUserIdByUsername(username);
        try {
            String sql = "update messages set messages.read = 1 where messages.receiverId = ? and messages.read = 0";
            row = jdbcTemplate.update(sql, new Object[]{userId});
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in readMessage");
        }
        return row;

    }

    @Override
    public int getUnreadMessages(String username) {
        
        //TODO exception
        String sql = "SELECT * FROM messages, users WHERE messages.read = 0 and messages.receiverId = ? and messages.receiverId = users.userId";
        List messagesList = (List) jdbcTemplate.queryForList(sql, new Object[]{userService.getUserIdByUsername(username)});
        int number = messagesList.size();

        return number;
    }

    @Override
    public ArrayList<MessageApi> getSentMessages(String username) {

        String sql = "SELECT * FROM messages, users  WHERE messages.senderId = users.userId  "
                + "AND users.userId = ?  AND messages.deleteBySender=0";
        List messagesList = (List) jdbcTemplate.query(sql, new Object[]{userService.getUserIdByUsername(username)}, new MessageApiMapper());
        ArrayList<MessageApi> messagesApi = (ArrayList<MessageApi>) messagesList;
        for (MessageApi msg : messagesApi) {
            int senderId = Integer.parseInt(msg.getSender().trim());
            User sender = userService.getUserById(senderId);
            msg.setSender(sender.getUsername());
            int receiverId = Integer.parseInt(msg.getReceiver().trim());
            User receiver = userService.getUserById(receiverId);
            msg.setReceiver(receiver.getUsername());
        }

        return messagesApi;

    }

    @Override
    public ArrayList<MessageApi> getReceivedMessages(String username) {
        
        String sql = "SELECT * FROM messages, users  WHERE messages.receiverId = users.userId  "
                + "AND users.userId = ?  AND messages.deleteByReceiver=0";
        List messagesList = (List) jdbcTemplate.query(sql, new Object[]{userService.getUserIdByUsername(username)}, new MessageApiMapper());
        ArrayList<MessageApi> messagesApi = (ArrayList<MessageApi>) messagesList;
        for (MessageApi msg : messagesApi) {
            int senderId = Integer.parseInt(msg.getSender().trim());
            User sender = userService.getUserById(senderId);
            msg.setSender(sender.getUsername());
            int receiverId = Integer.parseInt(msg.getReceiver().trim());
            User receiver = userService.getUserById(receiverId);
            msg.setReceiver(receiver.getUsername());
        }
        return messagesApi;

    }

    @Override
    public ArrayList<MessageApi> getDeletedMessages(String username) {
        
        String sql = "SELECT * FROM messages, users  WHERE (messages.receiverId = users.userId or messages.senderId = users.userId)  "
                + "AND users.userId = ?  AND (messages.deleteByReceiver=1 or messages.deleteBySender=1)";
        List messagesList = (List) jdbcTemplate.query(sql, new Object[]{userService.getUserIdByUsername(username)}, new MessageApiMapper());
        ArrayList<MessageApi> messagesApi = (ArrayList<MessageApi>) messagesList;
        for (MessageApi msg : messagesApi) {
            int senderId = Integer.parseInt(msg.getSender().trim());
            User sender = userService.getUserById(senderId);
            msg.setSender(sender.getUsername());
            int receiverId = Integer.parseInt(msg.getReceiver().trim());
            User receiver = userService.getUserById(receiverId);
            msg.setReceiver(receiver.getUsername());
        }
        return messagesApi;
    }

    @Override
    public ArrayList<MessageApi> getAllUserMessages() {
        
        //TODO exception
        List<MessageApi> messagesList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM messages ORDER BY messages.dateInfo DESC";
            messagesList = jdbcTemplate.query(sql, new MessageApiMapper());
        } catch (DataAccessException e) {
            //TODO
        }
        return (ArrayList<MessageApi>) messagesList;

    }

}

class MessageMapper implements RowMapper<Message> {

    @Override
    public Message mapRow(ResultSet rs, int arg1) throws SQLException {

        Message message = new Message();
        message.setMessageId(Integer.parseInt(rs.getString("messageId")));
        message.setSenderId(Integer.parseInt(rs.getString("senderId")));
        message.setReceiverId(Integer.parseInt(rs.getString("receiverId")));
        message.setMessageData(rs.getString("messageData"));
        //TODO Check SQL format and exception
        message.setRead(Integer.parseInt(rs.getString("read")));
        message.setDeleteBySender(Integer.parseInt(rs.getString("deleteBySender")));
        message.setDeleteByReceiver(Integer.parseInt(rs.getString("deleteByReceiver")));
        message.setDeleteByAdmin(Integer.parseInt(rs.getString("deleteByAdmin")));
        message.setTrashSender(Integer.parseInt(rs.getString("trashSender")));
        message.setTrashReceiver(Integer.parseInt(rs.getString("trashReceiver")));

        return message;

    }

}

class MessageApiMapper implements RowMapper<MessageApi> {

    @Autowired
    UserDaoImpl userService;

    @Override
    public MessageApi mapRow(ResultSet rs, int arg1) throws SQLException {

        MessageApi message = new MessageApi();
        message.setMessageId(Integer.parseInt(rs.getString("messageId")));
        message.setReceiver(rs.getString("receiverId"));
        message.setSender(rs.getString("senderId"));
        message.setMessageData(rs.getString("messageData"));
        message.setDateInfo(rs.getString("dateInfo"));
        message.setDeleteBySender(Integer.parseInt(rs.getString("deleteBySender")));
        message.setDeleteByReceiver(Integer.parseInt(rs.getString("deleteByReceiver")));
        message.setDeleteByAdmin(Integer.parseInt(rs.getString("deleteByAdmin")));

        return message;

    }

}
