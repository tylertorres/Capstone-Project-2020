const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const Designer = require('../models/Designer');

// @info Register a user
// @route /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, isDesigner } = req.body;

  var newUser = {
    name: name,
    email: email,
    password: password
  };

  if (isDesigner) {
    newUser['status'] = 'inactive';
    newUser = await Designer.create(newUser);
  } else {
    newUser = await User.create(newUser);
  }
  res.status(200).json({ success: true, data: newUser });
});

// @info Login a user
// @route /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    // User does not exist or invalid credentials
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const matches = await bcrypt.compare(password, user.password);

    // Password is incorrect
    if (!matches) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    // Signs the token and includes how long it will last, as well as a payload to identify current user
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    next(err);
  }
});

/* // @info Logout a user
// @route /api/v1/auth/logout
// @access Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
}); */
