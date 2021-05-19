/** @format */

const auth = {
  'jhessin@gmail.com': 'jimbo',
  'admin@gmail.com': 'admin'
}

$.fn.form.settings.rules.isUserValid = function() {
  const email = $('.ui.form').form('get value', 'email');
  const password = $('.ui.form').form('get value', 'password');

  for (const [key, value] of Object.entries(auth)) {
    console.log(`${key} - ${value}`);
    if (email === key && password === value) {
      return true;
    }
  }

  return false;
}

$('.ui.form').form({
  fields: {
    email: {
      identifier: 'email',
      rules: [
        {
          type: 'email',
          prompt: 'Please enter a valid email',
        },
        {
          type: 'isUserValid',
          prompt: 'Invalid email or password'
        }
      ],
    },
    password: {
      identifier: 'password',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter a password',
        },
      ],
    },
  },
});
