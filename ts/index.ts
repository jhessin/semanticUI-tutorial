/** @format */
import $ from 'jquery';

function pressButton() {
  const input = $('#input-text').val() as string;
  const output = $('#output-text');

  output.html(`
    <h1>${input}</h1>
  `);
}

const button = $('#submit-button');

button.on('click', pressButton);
