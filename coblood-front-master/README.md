# coblood-front
PUBLIC

    int registerUser(Register user);                                        # /register                         POST
    User validateUser(Login login);                                         # /login                            POST
    ArrayList<Bloodrequest> getPendingRequests();                           # /requests/red                     GET

ADMIN USER PANEL

    ArrayList<User> getAllUsers();                                          # /admin/users                      GET              * admin tab view all messages
                                                                                                                                 * table users - minimum columns 'username' "email" "role"
    int createUser(String username, String password, int roleId);           # /admin/users/create               POST             * button like compose message
                    *****userId refers to userId that is about to be edited****
    int deleteUser(String username);                                        # /admin/users/delete/{userId}      PUT              * row button to delete as icon 'X'
    User assignRole(String username, int roleId);                           # /admin/users/role/{userId}        PUT              * row button to make admin
    
    ArrayList <Message> getAllUserMessages();                               # /admin/messages                   GET              * admin *extra* tab view all messages
    ArrayList <Bloodrequest> getAllUserRequests();                          # /admin/requests                   GET          * admin *extra* tab view all requests
    

USER MESSAGES

    int getUnreadMessages(String user);                                     # /user/messages/unread             GET            * to load number of unread messages in navbar
    int sendMessage(String sender, String receiver, String messageData);    # /user/messages/send               POST           * table messages
                    *****messageId refers to messageId that is about to be edited****
    int deleteMessage(String user, int messageId);                          # /user/messages/delete/{messageId} PUT            * row button to delete as icon 'X'
    ArrayList<Message> getSentMessages(String user);                        # /user/messages/sent               GET            * tab sent
    ArrayList<Message> getReceivedMessages(String user);                    # /user/messages/received           GET            * tab inbox
    ArrayList<Message> getDeletedMessages(String username);                 # /user/messages/deleted            GET            * tab trash
    
USER BLOOD REQUESTS

    public int registerRequest(Bloodrequest bloodneed, String username);        # /user/requests/submit                 POST
    ArrayList<Bloodrequest> getMyRequests(String username);                     # /user/requests/myrequests             GET         * table requests
                    *****requestId refers to requestId that is about to be edited****
    int deleteRequest(String username, int requestId);                          # /user/requests/delete/{requestId}     PUT         * row button to delete as icon 'X'
    int completeRequest(String username, int requestId);                        # /user/requests/complete/{requestId}   PUT         * row button to complete as icon 'v'