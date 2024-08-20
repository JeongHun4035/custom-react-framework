import React, { useState } from "react"

import CustomInput from "@/components/CustomInput"
import { formatPhoneNumber } from "@/utils"
import "@/examples/examples.css"

const InputPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const formattedValue = formatPhoneNumber(rawValue) // 포맷팅 처리
    setPhoneNumber(formattedValue)
  }

  return (
    <div>
      <div className="examples-wrapper">
        <div>
          <h2>1. Basic Input</h2>
          <div className="example-area">
            <div className="exmaple-item">
              <CustomInput type="text" placeholder="text input" />
            </div>
          </div>
        </div>
        <div>
          <h2>2. Number Input</h2>
          <div className="example-area">
            <div className="exmaple-item">
              <CustomInput type="number" placeholder="number input" />
            </div>
          </div>
        </div>
        <div>
          <h2>3. Pattern Input</h2>
          <div className="example-area">
            <div className="exmaple-item">
              <CustomInput
                type="text"
                placeholder="input your phone number"
                value={phoneNumber}
                maxLength={13} // 예: 010-1234-5678 (총 13자리)
              />
              <CustomInput
                type="text"
                placeholder="input your phone number"
                value={phoneNumber}
                maxLength={13} // 예: 010-1234-5678 (총 13자리)
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputPage
