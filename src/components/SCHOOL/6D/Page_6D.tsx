import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const bg = 'assets/SCHOOL/6D/bg.png'
const Page_6D_eng = 'assets/SCHOOL/6D/Page_6D_eng.png'
const Page_6D_tag = 'assets/SCHOOL/6D/Page_6D_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_6D = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [answer, setAnswer] = useState('')
  const { language } = useLanguage()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="relative w-full h-full" ref={ref}>
      <Image
        className="absolute inset-0 object-cover"
        fill
        sizes="100vw"
        src={bg}
        alt="background"
      />

      <div className="flex items-center h-full w-full justify-center">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer absolute text-5xl font-bold flex items-center justify-center text-amber-950"
        >
          <Image
            onClick={() => textAreaRef.current?.focus()}
            className="object-cover "
            style={{
              width: '70%',
            }}
            src={language === 'eng' ? Page_6D_eng : Page_6D_tag}
            alt="dialogue"
          />
          <textarea
            value={answer}
            ref={textAreaRef}
            maxLength={13}
            style={{ left: language === 'eng' ? '53%' : '57%' }}
            onChange={(e) => setAnswer(e.target.value)}
            className="absolute text-amber-800 bg-transparent p-7 focus:outline-none text-center text-5xl w-[400px] text-brown-700 resize-none overflow-hidden appearance-none"
            autoFocus
            rows={1}
          />
        </motion.div>
      </div>
    </div>
  )
})

Page_6D.displayName = 'Page_6D'

export default Page_6D
