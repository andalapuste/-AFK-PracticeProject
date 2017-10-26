function gothere(){
    var thebox = document.mycombowopt
    if (thebox.windowoption.checked){
        
        if (!window.newwindow)
            newwindow = window.open("")
            newwindow.location = thebox.example.options[thebox.example.selectedIndex].value
        }
        else{
            
            location = thebox.example.options[thebox.example.selectedIndex].value             
        } 
}