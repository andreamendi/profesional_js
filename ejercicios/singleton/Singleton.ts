class Singleton {
  private static instance: Singleton;
  private constructor() {
    //init
  }
  static getInstance() {
    if(!Singleton.instance){
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

export default Singleton;



// La estructura de un SINGLETON "natural".
// class Ads {
//   private static instance: Ads;

//   private constructor() {}

//   static getInstance() {

//     if(!Ads.instance) {
//       Ads.instance = new Ads();
//     }

//     return Ads.instance;
//   }
// }