import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBQl_FwFbTLhPQb-qkCZUDtJYmxCIUUewE",
  authDomain: "tradio-store.firebaseapp.com",
  databaseURL: "https://tradio-store.firebaseio.com",
  projectId: "tradio-store",
  storageBucket: "tradio-store.appspot.com",
  messagingSenderId: "528439839910",
  appId: "1:528439839910:web:3695d701261c63a734f867",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;



// var todoApp = React.createClass({
//   mixins: [ReactFireMixin],
// });

// class Test {

//   componentWillMount() {
//     this.firebaseRef = new Firebase(
//       "https://ReactFireTodoApp.firebaseio.com/items/"
//     );
//     this.firebaseRef.on(
//       "child_added",
//       function (dataSnapshot) {
//         this.items.push(dataSnapshot.val());
//         this.setState({
//           items: this.items,
//         });
//       }.bind(this)
//     );
//   }

//   componentWillMount() {
//     this.bindAsArray(
//       new Firebase("https://ReactFireTodoApp.firebaseio.com/items/"),
//       "items"
//     );
//   }

//   componentWillUnmount() {
//     this.firebaseRef.off();
//   }

//   handleSubmit(e) {

//     e.preventDefault();

//     this.firebaseRef.push({
//       text: this.state.text,
//     });
//     this.setState({ text: "" });
//   }

// }
