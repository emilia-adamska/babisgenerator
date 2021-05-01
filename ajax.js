var firstPart, middlePart, endPart, firstPartPlural, middlePartPlural, plural = 2;
$.ajax({
    type: 'GET',
    async: false,
    url: "txtfiles/WHO.txt",
    success: function(data) { firstPart = data.split(/\r?\n/);}
  });
  $.ajax({
    type: 'GET',
    async: false,
    url: "txtfiles/WHAT.txt",
    success: function(data) { middlePart = data.split(/\r?\n/);}
  });
  $.ajax({
    type: 'GET',
    async: false,
    url: "txtfiles/WHOPLURAL.txt",
    success: function(data) { firstPartPlural = data.split(/\r?\n/);}
  });
  $.ajax({
    type: 'GET',
    async: false,
    url: "txtfiles/WHATPLURAL.txt",
    success: function(data) { middlePartPlural = data.split(/\r?\n/);}
  });
  $.ajax({
    type: 'GET',
    async: false,
    url: "txtfiles/ENDOFSENTENCE.txt",
    success: function(data) { endPart = data.split(/\r?\n/);}
  });
 var numberOfParts = [firstPart.length, middlePart.length, endPart.length, firstPartPlural.length, middlePartPlural.length, plural];