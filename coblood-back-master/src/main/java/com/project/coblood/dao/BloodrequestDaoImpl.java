/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project.coblood.dao;

import com.project.coblood.models.Bloodrequest;
import com.project.coblood.models.User;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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
public class BloodrequestDaoImpl implements BloodrequestDao {

    @PersistenceContext
    private EntityManager manager;

    @Autowired
    DataSource datasource;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    UserDaoImpl userService;

    @Autowired
    BloodrequestDaoImpl requestService;

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(BloodrequestDaoImpl.class);

    @Override
    public int registerRequest(Bloodrequest bloodneed, String username) {

        User user = userService.getUserByUsername(username);
        int ownerId = user.getUserId();
        String sql = "INSERT INTO bloodrequests (`ownerId`,`pFirstName`,`pLastName`,`pFatherName`,`contactEmail`, `contactPhone`,`needType`,`bloodType`,"
                + "`hName`,`hZipCode`,`compatibleNeed`, `note`) " + "VALUES(?,?,?,?,?,?,?,?,?,?,?,?);";
        jdbcTemplate.update(sql, new Object[]{
            ownerId,
            bloodneed.getpFirstName(),
            bloodneed.getpLastName(),
            bloodneed.getpFatherName(),
            bloodneed.getContactEmail(),
            bloodneed.getContactPhone(),
            bloodneed.getNeedType(),
            bloodneed.getBloodType(),
            bloodneed.gethName(),
            bloodneed.gethZipCode(),
            bloodneed.getCompatibleNeed(),
            user.getUsername()
        });

        return 1;
    }

    @Override
    public int deleteRequest(String username, int requestId) {
        int row;
        String sql = "";

        Bloodrequest req = getRequest(requestId);
        User user = userService.getUserByUsername(username);
        try {
            if (user.getUserId() == req.getOwnerId() || user.getRole().getRoleInt() == 1) {
                sql = "update bloodrequests set bloodrequests.deleted = 1 where bloodrequests.requestId = ?";
            }
            row = jdbcTemplate.update(sql, new Object[]{req.getRequestId()});
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in deleteRequest");
        }
        return row;
    }

    @Override
    public ArrayList<Bloodrequest> getMyRequests(String username) {
        //TODO exception
        User user = userService.getUserByUsername(username);
        int userId = user.getUserId();
        ArrayList<Bloodrequest> requestsList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM bloodrequests WHERE bloodrequests.ownerId = ? AND bloodrequests.deleted=0"; // 
            requestsList = (ArrayList<Bloodrequest>) jdbcTemplate.query(sql, new Object[]{userId}, new BloodrequestMapper());
        } catch (DataAccessException e) {
            //TODO
        }
        return requestsList;

    }

    @Override
    public ArrayList<Bloodrequest> getAllUserRequests() {

        ArrayList<Bloodrequest> requestsList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM bloodrequests where bloodrequests.deleted = 0";
            requestsList = (ArrayList<Bloodrequest>) jdbcTemplate.query(sql, new BloodrequestMapper());
        } catch (DataAccessException e) {
            //TODO
        }
        return requestsList;
    }

    private Bloodrequest getRequest(int requestId) {
        
        //TODO exception
        ArrayList<Bloodrequest> requestsList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM bloodrequests WHERE bloodrequests.requestId = ?";
            requestsList = (ArrayList<Bloodrequest>) jdbcTemplate.query(sql, new Object[]{requestId}, new BloodrequestMapper());
        } catch (DataAccessException e) {
            //TODO
        }
        return requestsList.size() == 1 ? requestsList.get(0) : null;
    }

    @Override
    public int completeRequest(String username, int requestId) {
        
        int row;
        try {
            String sql = "update bloodrequests set bloodrequests.status = ? where bloodrequests.requestId = ?";
            row = jdbcTemplate.update(sql, new Object[]{"COMPLETED", requestId});
        } catch (DataAccessException e) {
            //TODO
            row = 0;
            LOG.info("SQL error in editRequest");
        }
        return row;
    }

    @Override
    public ArrayList<Bloodrequest> getPendingRequests() {
        
        ArrayList<Bloodrequest> requestsList = new ArrayList<>();
        try {
            String sql = "SELECT * FROM bloodrequests, users WHERE bloodrequests.status = ? and bloodrequests.deleted=0 and bloodrequests.ownerId = users.userId";
            requestsList = (ArrayList<Bloodrequest>) jdbcTemplate.query(sql, new Object[]{"OPEN"}, new BloodrequestMapper());
            ArrayList<Bloodrequest> requestsApi = (ArrayList<Bloodrequest>) requestsList;
        } catch (DataAccessException e) {
            //TODO
        }
        return requestsList;
    }
}

class BloodrequestMapper implements RowMapper<Bloodrequest> {

    @Override
    public Bloodrequest mapRow(ResultSet rs, int arg1) throws SQLException {

        Bloodrequest bloodneed = new Bloodrequest();
        bloodneed.setRequestId(Integer.parseInt(rs.getString("requestId")));
        bloodneed.setOwnerId(Integer.parseInt(rs.getString("ownerId")));
        bloodneed.setpFirstName(rs.getString("pFirstName"));
        bloodneed.setpLastName(rs.getString("pLastName"));
        bloodneed.setpFatherName(rs.getString("pFatherName"));
        bloodneed.setContactEmail(rs.getString("contactEmail"));
        bloodneed.setContactPhone(Integer.parseInt(rs.getString("contactPhone")));
        bloodneed.setNeedType(rs.getString("needType"));
        bloodneed.setBloodType(rs.getString("bloodType"));
        bloodneed.sethName(rs.getString("hName"));
        bloodneed.setNote(rs.getString("note"));
        bloodneed.sethZipCode(Integer.parseInt(rs.getString("hZipCode")));
        bloodneed.setCompatibleNeed(Integer.parseInt(rs.getString("compatibleNeed")));
        bloodneed.setStatus(rs.getString("status"));

        return bloodneed;

    }

}
