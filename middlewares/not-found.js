function notFound(req, res, next) {
  res.render('shared/404');

  next();
}

module.exports = notFound;