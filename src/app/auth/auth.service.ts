import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

    @Injectable() // allows injecting other services
export class AuthService{
    token: string;


    constructor(private router: Router){}

    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
    }

    signInUser(email: string, password: string){ 
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/'])
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token:string) => this.token = token
                        )
                }
            ).catch(
                error => console.log(error));
    };

    getToken(){
        firebase.auth().currentUser.getIdToken()
         .then(
             (token:string) => this.token = token
            ); // get from local storage and check if it is still valid in firebase else try get new one 
            return this.token;
        }

        isAuthenticated(){
            return this.token != null;
        }

        logout(){
            firebase.auth().signOut();
            this.token = null;
        }
    }
