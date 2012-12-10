(function($) {  
  $.fn.extend({ 		     
  //pass the options variable to the function    
    animateMenu: function(options) {        
 
    /*      
    * Set the default values, use commas to separate each parameter:      
    * if Aurguments are passed in to the plugin upon instantiation      
    * these defaults will be overidden one by one.      
    */   
 
    var defaults = {          
      elements: "li"        
    , attach: "<span class=\\"tabcontainer\\"><span class=\\"taboff\\"></span><span class=\\"tabon\\"></span></span>"        
    , animate: "span.tabcontainer"        
    , speed: "fast"        
    , swing: "swing"        
    , start: "-114px"        
    , finish: "0px"      
    }			           
 
    // Pass in the optional arguments (options) from plugin instantiation and      
    // overide any corresponding defaults.      
    var options =  $.extend(defaults, options);			      
 
    return this.each(function() {        
 
      //Assign all defaults or passed auguments to a varablie for ease of use.       
      var o = options;					        
 
      //Assign "this" object to new variable for ease of use.	
      var obj = this;              				       
 
      //Get all LI's (defaults.elements) in the UL and assign to variable for ease of use.	
      var items = $(o.elements, obj);				        
 
      //Append all LI's ($(items)) with elements to be animated between. Injecting JavaScript        
      //like this helps with backward compatibility if user has JavaScript disabled.        
      $(items).append(o.attach);				        
 
      //Attach mouseover event for each element (LI's)        
      items.on('mouseover', function() {					          
 
      //Find the JavaScript injected elements to be animated and animate left.          
      $(this).find(o.animate).stop().animate({"left":o.start},	  
        {easing: o.swing, duration: o.speed});			  
      })                   
 
      //Find the JavaScript injected elements to be animated and animate right.          
      .on('mouseout', function() {	  
      $(this).find(o.animate).stop().animate({"left":o.finish},	  
        {easing: o.swing, duration: o.speed});	  
      });        
    });      
   }   
 });  
})(jQuery);