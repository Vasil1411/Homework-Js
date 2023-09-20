function information (group, type, day) {
  let pricePerPerson = 0

  switch (day) {
    case 'Friday':
      if (type =='Students') {
        pricePerPerson = 8.45
      }
      else if (type == 'Business') {
          pricePerPerson = 10.9
      }
      else {
         pricePerPerson = 15
      }
      break
      case 'Saturday':
        if (type =='Students') {
          pricePerPerson = 9.8
        }
        else if (type == 'Business') {
            pricePerPerson = 15.6
        }
        else {
           pricePerPerson = 20
        }
        break
        case 'Sunday':
          if (type =='Students') {
            pricePerPerson = 10.46
          }
          else if (type == 'Business') {
              pricePerPerson = 16
          }
          else {
             pricePerPerson = 22.5
          }
          break
  }
  let totalPrice = pricePerPerson * group
  if (type =='Students'&& group>=30) {
   totalPrice *= 0.85
  }
  else if (type == 'Business' && group>=100) {
    let discount = 10 * pricePerPerson
    totalPrice -= discount
  }
  else if (type =='Regular' && (group>=10 && group<=20)) {
    totalPrice *= 0.95
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
  }

information (30,

  "Students",
  
  "Sunday")