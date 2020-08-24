https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

    function century(year) {
        if (year % 100 === 0)  {
            return (year / 100)
        } else {
            let c = year % 100;

            return ((year + 100) - c) / 100;
        }
    }