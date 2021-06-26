import firebase from 'firebase/app';
import 'firebase/auth';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const googleLogin = () => {
	const handleLoginPopUp = () => {
		firebase.auth()
		.signInWithPopup(googleProvider)
		.then((result) => {
			console.log(result);
		}).catch((error) => {
			console.log(error);
	  });
	}
	return (
		<div>
			<button onClick={handleLoginPopUp}>
				login with google
				</button>
		</div>
	)
}

export default googleLogin;