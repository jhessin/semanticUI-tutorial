/** @format */
import $ from 'jquery';

function pressButton() {
  const input = $('#input-text').val() as string;
  const output = $('#output-text');

  output.text(input);
}

const button = $('#submit-button');

button.on('click', pressButton);
