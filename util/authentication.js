function createUserSession(req, user, action) {
  req.session.uid = user._id.toString();
  req.session.isAdmin = user.isAdmin;
  req.session.save(action);
}

function destoryUserAuthSession(req) {
  req.session.uid = null;
} 

module.exports = {
  createUserSession: createUserSession,
  destoryUserAuthSession: destoryUserAuthSession
}