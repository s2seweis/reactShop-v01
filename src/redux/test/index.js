try {



    const settings = call(firebase.docRef);

    

    settings.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();


       put(getSettingSuccess(data))




        console.log("Document data:", data);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });




  } 