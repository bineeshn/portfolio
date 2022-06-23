<template>
    <v-layout id="contact" row justify-center wrap class="mt-16 pt-2">
        <v-flex xs12>
            <h2 class="text-center subtitle" data-aos="fade-down" data-aos-duration="1500" data-title="LET'S TALK">Contact</h2>
        </v-flex>
        <v-flex data-aos="fade-right" data-aos-duration="1500" sm6 class="pa-6">
            <h3>Get in<span class="secondary--text">&nbsptouch</span></h3>

            <div class="py-4 subheading ">
                <v-icon  color="primary" left>fas fa-map-marker-alt</v-icon>
                <span class="text">Kerala,India</span>
            </div>
            <div class="py-4 subheading">
                <v-icon  color="primary" left>fas fa-envelope</v-icon>
                <span class="text">bineeshb004@gmail.com</span>
                <a class="pl-2 text-decoration-none" href="mailto:bineesh@gmail.com" target="_blank"><v-icon small color="secondary">fas fa-arrow-circle-right</v-icon></a>
            </div>
            <div class="py-4 subheading">
                <v-icon color="primary" left>fab fa-whatsapp</v-icon>
                <span class="text">+91&nbsp;7034271603</span>
                <a class="pl-2 text-decoration-none" href="https://api.whatsapp.com/send?phone=+917034271603&text=Hello, More Informations!" target="_blank"><v-icon small color="secondary">fas fa-arrow-circle-right</v-icon></a>
            </div>
            <div class="py-4 subheading">
                <v-icon color="primary" left>fab fa-linkedin-in</v-icon>
                <span class="text">bineeshn</span>
                <a class="pl-2 text-decoration-none" href="https://www.linkedin.com/in/bineeshn" target="_blank"><v-icon small color="secondary">fas fa-arrow-circle-right</v-icon></a>
            </div>
        </v-flex>
        <v-flex data-aos="fade-left" data-aos-duration="1500" sm6 class="pa-6 d-flex flex-column">
        	<h3 class="mb-3">Contact<span class="secondary--text">&nbspForm</span></h3>
            <v-card elevation="8" shaped class="pa-3">
                <v-card-text>
                    <div class="pb-4" v-if="message||error">
                        <span class="green--text font-weight-bold">{{message}}</span>
                        <span class="red--text font-weight-bold">{{error}}</span>
                    </div>
					<form >
						<v-text-field name="name" color="primary" background-color="transparent"
							v-model="name" :error-messages="nameErrors" label="Name"
							required outlined @blur="$v.name.$touch()"></v-text-field>
						<v-text-field name="email" type="email" color="primary" background-color="transparent"
							v-model="email" :error-messages="emailErrors" label="E-mail"
							required outlined @blur="$v.email.$touch()"></v-text-field>
						<v-textarea name="body" color="primary" background-color="transparent"
							v-model="body" :counter="200" :error-messages="bodyErrors"
							label="Textarea" outlined @blur="$v.body.$touch()" ></v-textarea>
						<v-btn @click="submit" type="submit" color="primary" 
							class="white--text" :disabled="body.length <= 20">SEND MESSAGE</v-btn>
						<v-btn class="ml-5" @click="clear">clear</v-btn>
					</form>
				</v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
    required,
    maxLength,
    email,
    minLength,
} from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    validations: {
         name: { required, maxLength: maxLength(20) },
         email: { required, email },
         body: { required, minLength: minLength(20) },
    },
    data() {
        return {
                name: "",
                email: "",
                body: "",
                message:"",
                error:""
        };
    },
    methods: {
        submit() {
            this.$v.$touch();
            let component=this;
            if(component.name && component.email && component.body){
                event.preventDefault();
                const data={
                    name: component.name,
                    email: component.email,
                    body: component.body,
                };
                fetch("https://formspree.io/f/xjvlykoq", {
                    method:"POST",
                    body:JSON.stringify(data),
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        component.message = "Thanks for your submission!";
                        component.clear()
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                component.error = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                component.error = "Oops! There was a problem submitting your form"
                            }
                        })
                    }
                    setTimeout(() => {
                        component.message="";
                        component.error="";
                    }, 5000);
                }).catch(error => {
                    component.error = "Oops! There was a problem submitting your form"
                    setTimeout(() => {
                        component.message="";
                        component.error="";
                    }, 5000);
                });
            }
        },
        clear() {
            this.$v.$reset();
            this.name = "";
            this.email = "";
            this.body = "";
        },
    },
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.maxLength &&
                errors.push("Name must be at most 20 characters long");
            !this.$v.name.required && errors.push("Name is required.");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Must be valid e-mail");
            !this.$v.email.required && errors.push("E-mail is required");
            return errors;
        },
        bodyErrors() {
            const errors = [];
            if (!this.$v.body.$dirty) return errors;
            !this.$v.body.minLength &&
                errors.push("Text must be at least 20 characters long");
            !this.$v.body.required && errors.push("Text is required");
            return errors;
        },
    },
};
</script>

<style lang="scss">
#contact{
    span{
        &.text{
            font-size:18px;
        }
    }
}
</style>
