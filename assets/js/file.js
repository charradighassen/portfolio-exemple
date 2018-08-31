   var bar = new ProgressBar.Circle(chart1, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.99);
   
   
   var bar = new ProgressBar.Circle(chart2, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.90);
   
   
   
   var bar = new ProgressBar.Circle(chart3, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.82);
   
   
   var bar = new ProgressBar.Circle(chart4, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.93);
