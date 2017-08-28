exports.sql={
    getPasswdByPhone:"select user_passwd from userTable where user_phone=?",
    addUser:"insert into userTable(user_phone,user_name,user_passwd) values(?,?,?)"
};