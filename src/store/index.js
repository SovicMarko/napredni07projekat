import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objave: [],
    pojedinacnaObjava: {}
  },
  mutations: {
    popunjavanjeListeObjava(state, objava) {
      state.objave.push(objava);
    },
    ocistiListuObjava(state) {
      state.objave = [];
    },
    postaviPojedinacnu(state, objava) {
      state.pojedinacnaObjava = objava;
    }
  },
  actions: {
    listaObjava(context) {
      context.commit('ocistiListuObjava');
      db.collection("objave")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            context.commit('popunjavanjeListeObjava', {
              id: doc.id,
              tip: doc.data().tip,
              name: doc.data().name,
              image: doc.data().image,
              price: doc.data().price,
              description: doc.data().description,
              discount: doc.data().discount,
            })
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    },
    kreiranjeObjave(context, data) {
      db.collection("objave")
        .doc()
        .set({
          tip: data.tip,
          name: data.name,
          image: data.image,
          price: data.price,
          description: data.description,
          discount: data.discount,
        })
        .then(function () {
          context.dispatch('listaObjava');
          alert("Objava je uspesno uneta");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
    brisanjeObjave(context, id) {
      db.collection("objave")
        .doc(id)
        .delete()
        .then(function () {
          alert("Objava je uspesno obrisana!");
          context.dispatch('listaObjava');
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
    pojedinacnaObjava(context, id) {
      db.collection("objave").doc(id).get().then(function (doc) {
        if (doc.exists) {
          context.commit('postaviPojedinacnu', {
            id: doc.id,
            tip: doc.data().tip,
            name: doc.data().name,
            image: doc.data().image,
            price: doc.data().price,
            description: doc.data().description,
            discount: doc.data().discount,
          })
        } else {
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
    }
  },
  getters: {
    // pojedinacnaObjava: (state) => (id) => {
    //   return state.objave.find(objava => objava.id === id)
    // }
  },
  modules: {
  }
})
