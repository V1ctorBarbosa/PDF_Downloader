import React from "react";
import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import Logo from "../assets/pago_logo.png";
import Icon from "../assets/icone-colorido-padrao.png"

import styles from "./PDFStyle"

const PDFFile = ({data}) => {

  console.log(data)

  const  userData = data.map((info) => {
    return console.log(info)
  })

  return (
    <Document>
      <Page size="A4" style={styles.body}>
      {/*** Header ***/}

        <Image style={styles.logo} src={Logo} />
        <Text style={styles.header} fixed>
          Comprovante de pagemento
        </Text>

      {/*** Data ***/}

       <View style={styles.data}>
          <Text style={styles.valor}>Valor</Text>
          <Text>{new Intl.NumberFormat(
            'pt-BR', {
            style: 'currency',
            currency: 'BRL'
            }).format(0)}
          </Text>
        </View>

      <View style={styles.dataContainer}> 
      	<View style={styles.sidebar}></View>
        <View style={styles.textContent}>
        	<Text style={styles.payment}>
            Pagamento realizado
          </Text>
        	<Text>
            {"XX/XX/XX"} {"XX:XX"}
          </Text>
        </View>
      </View>

      {/*** Details ***/}

      <View style={styles.detailsContainer}>   
        <View style={styles.section}>
          <Text style={styles.text1}>
            De
          </Text>
          <Text style={styles.text2}>
            Inova Brasil Comercio Varejista De Produtos Alimentícios Ltda
          </Text>
        </View>
        
        <Text style={styles.text4}>
          Banco Cora
        </Text>
        <Text style={styles.text4}>
          CNPJ: XXXXXXXXXXXXX
        </Text>
        <Text style={styles.text4}>
          Ag XXXX - Cc XXXXXXX-X
        </Text>
        
        <View style={styles.section}>
          <Text style={styles.text1}>
            Favorecido
          </Text>
          <Text style={styles.text2}>
            XXXX - XXXXXXXXXX
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text1}>
            Código do Boleto
          </Text>
          <Text style={styles.text3}>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.text1}>
            Autenticação
          </Text>
          <Text style={styles.text3}>
            XXXXXXXXXXXXXXXXXXXXXXXXXXX
          </Text>
        </View>
      </View>

      {/***  Footer ***/} 

        <View style={styles.underText}>
          <Text>Pagamento feito de forma automática pela Pagô.</Text>
          <Text>Venha automatizar seus pagamentos também!</Text>
          <Text>Piscou, Pagô!</Text>
        </View>
        <Image style={styles.icon} src={Icon} />  
        <View style={styles.footer}>
          <Text>Pago com: Cora Pagamentos LTDA</Text>
          <Text>CNPJ: 34.052.649/0001-78</Text>
        </View>    
      </Page>
    </Document>
  );
};

export default PDFFile;
