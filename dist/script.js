const instance = new TypeIt("#myElement")
  .type("Happy Birthday! ")
  .pause(1000)
  .break()
  .type("Best-in-design")
  .delete(14)
  .type("Agba designer")
  .delete(13)
  .type("Figma Lead, OAU")
  .delete(4)
  .type(" Ife")
  .delete(14)
  .type("eyi Faloye")
  .delete(12)
//  .type("eyi, we love you.")
//  .delete(19)
  .type(" Chula.")
  //.destroy()
  .go();


  //instance.destroy("#myElement");
