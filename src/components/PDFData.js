import React from 'react'

import PDFFile from './PDFFile'
import { PDFDownloadLink } from '@react-pdf/renderer'

export default function PDFData() {

  const PaymentsInfo = [
    {
      value: 5,
      date: '12/10/2022',
      hour: '15:30'
    },
    {
      value: 10,
      date: '02/09/2022',
      hour: '5:30'
    },
    {
      value: 20,
      date: '22/10/2022',
      hour: '20:30'
    }
  ]

  return (
    <>
      {PaymentsInfo.map(() => {
        return (
          <PDFDownloadLink document={<PDFFile data={PaymentsInfo} />} fileName="Comprovante">
             <button> Download </button>      
          </PDFDownloadLink>
        )
      })
      }
    </>
  )
}
