//Write concise declarative functions

//an object can contain a function.

//This is the long way to put a function within an object:


const bicycle = 
{
    gear: 2,
    setGear: function(newGear) 
        {
            "use-strict";
            this.gear = newGear;
        }
};

bicycle.setGear(3);
console.log(bicycle.gear);

/* but there's a simpler way. Instead of using the function
...keyword (line 11), and the colon after setGear... We can just
...delete all that, and now [see index1.js], it still works excellently. 
*/

//Lavidalavida Boulevarde :-)