import { StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({

// Header

logo: {
    marginVertical: 15,
    marginHorizontal: 195,
    width: 199,
},
header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#82B83C",
},

// Data

data:{
    color: '#2B334B',
    padding: "15 30",
    backgroundColor: "#FAFAFF",
    textAlign: "center",
    borderRadius: 20,
    width: 430,
    margin: "0 auto 0"
},

valor:{
    marginBottom: 10,
},

dataContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "30 0 10 80",
    color: '#2B334B'
},

sidebar: {
    backgroundColor: "#82B83C",
    borderRadius: 20,
    width: 7,
    height: 80
},

textContent: {
    margin: "12 20 0"
},

payment:{
    marginBottom: 10
},

// Details

detailsContainer: {
    display: "flex",
    margin: "10 80",
    fontSize: 14,
    color: '#2B334B'
},

section: {
    margin: "10 0",
},

text1: {
    paddingBottom: 3,
},

text2: {
    paddingBottom: 0,
},

text3: {
    padding: '8 0'
},

text4: {
    color: '#A8A8B3',
    fontSize: 12
},

//Footer Styles

underText: {
    fontSize: 14,
    paddingHorizontal: 80,
    color: "#82B83C",
    marginTop: 25
},

icon: {
    width: 50,
    marginTop: 655,
    marginLeft: 470,
    zIndex: 2,
    position: 'absolute'
},

footer: {
    marginTop: 17.8,
    fontSize: 12,
    color: '#787878',
    padding: 28,
    backgroundColor: "#A8A8B3",
    position: 'relative'
},
});

export default styles;