function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }

    
    function deleteListItem () {
        li.addClass("delete");
    }

  
    function crossOut() {
          li.toggleClass("strike");
      }
  
      li.on("dblclick", function crossOut() {
          li.toggleClass("strike");
      });
  
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
  
  
     $('#list').sortable();
    }