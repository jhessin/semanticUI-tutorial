/** @format */
import $ from 'jquery';

$('.ui.form').form({
  fields: {
    email: {
      identifier: 'email',
      rules: [
        {
          type: 'email',
          prompt: 'Please enter a valid email',
        },
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
