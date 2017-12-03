function formatterIP(IP) {
                        var formatterIPArray = IP.split('.');
                        console.log(formatterIPArray);
                        var formatterIPString = formatterIPArray[2] + "." + formatterIPArray[3];
                        console.log(formatterIPString);
                        return formatterIPString;
                    }
formatterIP("192.168.123.123");
