/* This for loop displays #s from 1-100. 
Every # that is a multiple of 3 will display "Fizz" 
Every # that is a multiple of 7 will display "Buzz"
Every # that is a multiple of 3 & 7 will display "FizzBuzz" */

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%7 === 0 )
  {
    document.write(i + " Fizzbuzz");
  }
  else if ( i%3 === 0 ) 
  {
    document.write(i + " Fizz");
  }
  else if ( i%7 === 0 ) 
  {
    document.write(i + " Buzz")
  }
  else
  {
    document.write(i);
  }

  /* Makes each number display on a new line */
  document.write('<br>')
}


