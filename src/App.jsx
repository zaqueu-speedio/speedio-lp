import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import { useRef, useState, useEffect } from "react"
import CompaniesIconFirstRow from "./icons/CompaniesIconFirstRow"
import CompaniesIconSecondRow from "./icons/CompaniesIconSecondRow"
import CompaniesIconThirdRow from "./icons/CompaniesIconThirdRow"
import IntegrationsIcon from "./icons/IntegrationsIcon"
import PlansIcon from "./icons/PlansIcon"
import MoreSalesIcon from "./icons/MoreSalesIcon"
import UserIcon from "./icons/UserIcon"

function App() {
  const dataRefs = useRef([])
  const durations = [1000, 1000, 1000, 1000]
  const values = [23, 45, 28, 23]
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.5 })

    dataRefs.current.forEach(ref => observer.observe(ref))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const animationFrames = dataRefs.current.map((ref, index) => {
      let startTime
      const duration = durations[index]
      const value = values[index]

      const startAnimation = (timestamp) => {
        if (!startTime) startTime = timestamp
        const elapsedTime = timestamp - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const nextNumber = Math.round(value * progress)

        if (parseInt(ref.textContent) !== value) {
          ref.textContent = nextNumber
        }
      
        if (progress < 1) {
          requestAnimationFrame(startAnimation)
        }
      }

      return requestAnimationFrame(startAnimation)
    })

    return () => {
      animationFrames.forEach(frameId => cancelAnimationFrame(frameId))
    }
  }, [isVisible, durations, values])

  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => (prevCount % 3) + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [count])

  const questions = [
    {
      title: 'O que é a Speedio?',
      answer: 'A Speedio é uma plataforma de geração de leads B2B que utiliza inteligência de mercado para ajudar empresas a encontrar novos clientes. Através de dados de empresas atualizados e precisos, a Speedio ajuda a encontrar leads qualificados para sua prospecção ativa.'
    },
    {
      title: 'De onde veem nossos dados?',
      answer: 'Nossos dados são provenientes de fontes públicas e privadas, como sites, redes sociais, e-mails, telefones e outras fontes de informação. Nossa equipe de inteligência de mercado atualiza e valida os dados constantemente para garantir a qualidade das informações.'
    },
    {
      title: 'Como funciona o suporte?',
      answer: 'O suporte da Speedio é feito por especialistas em inteligência de mercado e geração de leads. Nossa equipe está disponível para ajudar a tirar dúvidas, resolver problemas e auxiliar na utilização da plataforma.'
    },
    {
      title: 'Posso integrar a plataforma com outro sistema?',
      answer: 'Sim, a Speedio possui integrações nativas com as principais ferramentas de CRM, automação de marketing e outras soluções de vendas. Além disso, é possível integrar a plataforma com outros sistemas através de nossa API.'
    },
    {
      title: 'Existe conformidade com a LGPD?',
      answer: 'Sim, a Speedio está em conformidade com a LGPD e outras leis de proteção de dados. Nossa plataforma é segura e garante a privacidade e a segurança dos dados dos nossos clientes.'
    },
    {
      title: 'Existe algum treinamento de vendas da Speedio?',
      answer: 'Sim, a Speedio oferece treinamentos de vendas e prospecção ativa para ajudar sua equipe a utilizar a plataforma de forma eficiente e a obter os melhores resultados.'
    }
  ]

  const [showAnswerF, setShowAnswerF] = useState(Array(3).fill(false))
  const [showAnswerS, setShowAnswerS] = useState(Array(3).fill(false))

  const toggleAnswer = (index, type) => {
    if (type == 'F') {
      setShowAnswerF(prevState => {
        const newState = [...prevState]
        newState[index] = !newState[index]
        return newState
      })} else {
        setShowAnswerS(prevState => {
          const newState = [...prevState]
          newState[index] = !newState[index]
          return newState
        })
      }
  }

  return (
    <>
      <div className="App">

        <div className="header">
          <svg width="162" height="39" viewBox="0 0 162 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.229461 23.544C-0.293081 22.9832 0.0801635 22.2321 1.31526 20.4716C1.61386 20.0977 1.91246 20.0229 2.28909 20.1725C6.29299 22.2355 8.53925 22.2355 10.3715 22.2355C14.0022 22.2355 15.5732 20.3254 13.7002 17.9259C12.7637 16.6888 9.77096 16.128 8.49853 15.7134C4.56928 14.5511 2.2857 12.9741 1.53921 10.3877C-0.03181 5.55136 3.18488 1.20445 9.54701 0.531507C11.7152 0.344579 14.1854 0.755819 16.167 1.5817C18.1113 2.55712 18.9731 3.41699 18.7492 4.05594C18.4506 4.76626 17.5514 5.85384 17.0289 6.56756C16.581 7.12834 15.1593 5.93201 13.4355 5.55476C11.9765 5.25567 10.3308 4.84103 8.19654 5.59214C5.95029 6.67972 5.50239 8.62716 7.22271 9.93905C9.01768 11.2136 11.3013 12.0021 12.6857 12.4881C14.0701 13.0115 16.279 13.7626 17.3987 15.1492C18.4099 16.1247 19.1564 18.1095 19.1564 19.6831C19.1564 23.8431 15.6377 26.4668 10.626 26.5416C6.55087 26.6164 1.80048 24.968 0.229461 23.544Z" fill="#FDFFFD"/>
          <path d="M24.9993 25.9813V1.13354C24.9993 0.759686 25.2979 0.460602 25.6711 0.460602H34.3881C38.9892 0.460602 42.6571 4.17196 42.6571 8.74318C42.6571 13.3518 38.9892 17.0258 34.3881 17.0258H30.6488C30.089 17.0258 29.7123 17.1753 29.7123 17.7769V25.9847C29.7123 26.3585 29.4137 26.661 29.0371 26.661H25.6711C25.2979 26.6542 24.9993 26.3551 24.9993 25.9813ZM34.3881 12.2268C36.295 12.2268 37.8694 10.6906 37.8694 8.73978C37.8694 6.82973 36.2984 5.29012 34.3881 5.29012H30.6115C29.977 5.29012 29.7123 5.55182 29.7123 6.04123V12.2268H34.3881Z" fill="#FDFFFD"/>
          <path d="M48.0857 25.8669V1.1687C48.0857 0.794842 48.3843 0.495758 48.7575 0.495758H65.5196C65.8929 0.495758 66.1948 0.794842 66.1948 1.1687V4.31587C66.1948 4.68973 65.8963 4.98881 65.5196 4.98881H53.4333C53.06 4.98881 52.758 5.2879 52.758 5.66175V11.171C52.758 11.657 52.7207 11.8847 53.6199 11.8847H62.9748C63.3107 11.8847 63.6127 12.1464 63.6127 12.4829V15.6675C63.6127 16.0039 63.3141 16.269 62.9748 16.269H53.5826C52.7988 16.269 52.758 16.942 52.758 17.1289V21.102C52.758 21.4758 52.8327 22.0026 53.8065 22.0026H65.7809C66.1541 22.0026 66.4527 22.3391 66.4527 22.7163V25.8635C66.4527 26.2374 66.1541 26.5364 65.7809 26.5364H48.7609C48.3843 26.5398 48.0857 26.2408 48.0857 25.8669Z" fill="#FDFFFD"/>
          <path d="M72.2903 25.8669V1.1687C72.2903 0.794842 72.5889 0.495758 72.9621 0.495758H89.7242C90.0974 0.495758 90.396 0.794842 90.396 1.1687V4.31587C90.396 4.68973 90.0974 4.98881 89.7242 4.98881H77.6379C77.2646 4.98881 76.9626 5.2879 76.9626 5.66175V11.171C76.9626 11.657 76.9253 11.8847 77.8245 11.8847H87.1793C87.5153 11.8847 87.8139 12.1464 87.8139 12.4829V15.6675C87.8139 16.0039 87.5153 16.269 87.1793 16.269H77.7872C77.0033 16.269 76.9626 16.942 76.9626 17.1289V21.102C76.9626 21.4758 77.0373 22.0026 78.0111 22.0026H89.9855C90.3587 22.0026 90.6573 22.3391 90.6573 22.7163V25.8635C90.6573 26.2374 90.3587 26.5364 89.9855 26.5364H72.9587C72.5923 26.5398 72.2903 26.2408 72.2903 25.8669Z" fill="#FDFFFD"/>
          <path d="M101.216 25.7929V22.5336C101.216 22.0476 101.589 21.7111 102.04 21.7111H105.071C109.597 21.7111 113.265 18.0372 113.265 13.5033C113.265 8.96949 109.597 5.29552 105.071 5.29552H102.04C101.779 5.29552 101.593 5.48244 101.593 5.74414V14.7472C101.593 15.1959 101.219 15.5323 100.768 15.5323H97.514C97.1034 15.5323 96.7268 15.1585 96.7268 14.7472V1.24429C96.7268 0.795665 97.1001 0.418411 97.514 0.418411H105.074C112.295 0.418411 118.131 6.26414 118.131 13.4999C118.131 20.7323 112.295 26.5814 105.074 26.5814H102.044C101.589 26.578 101.216 26.2416 101.216 25.7929Z" fill="#FDFFFD"/>
          <path d="M123.997 25.9786V1.09345C123.997 0.719598 124.333 0.37973 124.71 0.37973H128.602C128.975 0.37973 129.277 0.716199 129.277 1.09345V25.9786C129.277 26.3524 128.978 26.6549 128.602 26.6549H124.71C124.333 26.6515 123.997 26.3524 123.997 25.9786Z" fill="#FDFFFD"/>
          <path d="M138.366 4.83915C140.874 1.80413 144.314 0.193158 147.87 0.00283216C148.318 -0.0345533 148.658 0.301916 148.695 0.791326V4.05066C148.695 4.53667 148.434 4.79837 147.908 4.83915C145.661 5.02608 143.531 6.15104 142.109 7.94894C139.041 11.6229 139.527 17.0948 143.12 20.1298C146.788 23.2022 152.176 22.7536 155.169 19.0796C157.415 16.3811 157.826 12.6323 156.255 9.52253C155.919 8.80881 155.994 8.3228 156.516 7.91156C156.927 7.68725 158.274 6.71182 158.762 6.37536C159.285 6.03889 159.923 6.22581 160.221 6.74921C162.99 11.6603 162.505 17.8425 158.912 22.1894C154.422 27.923 145.441 28.7115 140.09 23.9125C134.437 19.1204 133.687 10.5353 138.366 4.83915Z" fill="#FDFFFD"/>
          <path d="M154.659 36.3762C154.659 36.3762 153.909 36.6379 153.424 36.7875C152.976 36.937 150.991 37.5386 149.271 37.6881C147.625 37.8377 145.155 37.9872 145.155 37.9872C143.995 38.062 142.125 38.0994 141.002 38.0246C141.002 38.0246 138.942 37.9124 136.886 37.6881C134.83 37.4264 132.658 36.7501 132.658 36.7501L131.535 36.3762C131.05 36.2267 130.673 35.7033 130.673 35.2139V33.3412C130.673 32.8552 131.084 32.5527 131.535 32.6683L132.658 32.9674C136.811 34.0175 138.084 34.3914 141.002 34.4662C142.125 34.4662 143.995 34.4288 145.155 34.3914C145.155 34.3914 147.327 34.2419 149.271 34.0175C151.215 33.7932 153.499 33.0795 153.499 33.0795L154.659 32.7057C155.107 32.5935 155.484 32.8552 155.484 33.3446V35.2173C155.48 35.7033 155.107 36.2267 154.659 36.3762Z" fill="#FDFFFD"/>
          <path d="M154.45 13.5834C154.45 16.802 151.844 19.4121 148.631 19.4121C145.418 19.4121 142.812 16.802 142.812 13.5834C142.812 10.3649 145.418 7.75467 148.631 7.75467C151.844 7.75467 154.45 10.3649 154.45 13.5834Z" fill="#6AABDD"/>
          </svg>
          <div className="header-links">
            <span>Soluções</span>
            <span>Dados</span>
            <span>Integrações</span>
            <span>Planos</span>
          </div>
        </div>

        <div className="hero">
        <svg class="hero-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2d2f34" fill-opacity="1" d="M0,256L40,256C80,256,160,256,240,256C320,256,400,256,480,261.3C560,267,640,277,720,240C800,203,880,117,960,80C1040,43,1120,53,1200,53.3C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
          <div className="hero-text">
            <h2>Plataforma de big data para <span style={{color:'#1296FC',fontWeight:'500'}}>geração de leads B2B</span></h2>
            <p>Monte listas verdadeiramente assertivas para sua prospecção ativa.</p>
          </div>
          <div className="hero-form">
            <div className="outer"></div>
            <div className="form">
              <input type="text" placeholder="Seu nome" />
              <input type="text" placeholder="E-mail corporativo" />
              <input type="text" placeholder="WhatsApp" />
              <input type="text" placeholder="Faz prospecção ativa?" />
              <input type="text" placeholder="Vende para..." />
              <button className="form-btn">Conheça nossa solução</button>
            </div>
          </div>
          <MdOutlineKeyboardDoubleArrowDown className="arrow-down" />
        </div>

        <div className="aside">
          <p>Eleita a plataforma #1 em <b>dados de qualidade</b>, <b>geração de leads B2B</b> e <b>pré-vendas.</b></p>
          <div className="companies">
            <div className={`companies-show ${count !== 1 ? 'companies-hidden' : ''}`}>
              {count === 1 && <CompaniesIconFirstRow />}
            </div>
            <div className={`companies-show ${count !== 2 ? 'companies-hidden' : ''}`}>
              {count === 2 && <CompaniesIconSecondRow />}
            </div>
            <div className={`companies-show ${count !== 3 ? 'companies-hidden' : ''}`}>
              {count === 3 && <CompaniesIconThirdRow />}
            </div>
          </div>
        </div>

        <div className="all-benefits">
          <h3>O que nós <b>entregamos</b></h3>
          <div className="benefit-cards-wrapper">
            <div className="benefit-card">
              <h3>Qualidade de dados</h3>
              <p>Com a Speedio, você tem acesso a dados de empresas atualizados e precisos, com informações de contato de decisores e empresas ativas.</p>
            </div>
            <div className="benefit-card">
              <h3>Inteligência de mercado</h3>
              <p>Com a Speedio, você tem acesso a dados de empresas atualizados e precisos, com informações de contato de decisores e empresas ativas.</p>
            </div>
            <div className="benefit-card">
              <h3>Produtividade</h3>
              <p>Com a Speedio, você tem acesso a dados de empresas atualizados e precisos, com informações de contato de decisores e empresas ativas.</p>
            </div>
            <div className="benefit-card">
              <h3>Conversão</h3>
              <p>Com a Speedio, você tem acesso a dados de empresas atualizados e precisos, com informações de contato de decisores e empresas ativas.</p>
            </div>
            <div className="benefit-card">
              <h3>Compliance</h3>
              <p>Com a Speedio, você tem acesso a dados de empresas atualizados e precisos, com informações de contato de decisores e empresas ativas.</p>
            </div>
            <div className="benefit-card">
              <h3>Integrações nativas</h3>
              <p>Com a Speedio, você tem acesso a dados de empresas atualizados e precisos, com informações de contato de decisores e empresas ativas.</p>
            </div>
          </div>
        </div>

        <div className="hero-data">
          <h2>Dados de mais de 40 milhões de empresas <span>estão na Speedio</span></h2>
          <div className="data-cards">
            <svg class='bg' width="711" height="395" viewBox="0 0 711 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="355.5" cy="355.5" r="354.5" stroke="url(#paint0_linear_22_723)" stroke-opacity="0.06" stroke-width="2"/>
            <circle cx="355" cy="370" r="340" stroke="url(#paint1_linear_22_723)" stroke-opacity="0.06" stroke-width="2"/>
            <circle cx="355" cy="385" r="325" stroke="url(#paint2_linear_22_723)" stroke-opacity="0.06" stroke-width="2"/>
            <defs>
            <linearGradient id="paint0_linear_22_723" x1="355.5" y1="0" x2="355.5" y2="711" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.601799" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_22_723" x1="355" y1="29" x2="355" y2="711" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.601799" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_22_723" x1="355" y1="59" x2="355" y2="711" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.601799" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
            <div className="card">
              <div className="card-texts">
                <h3>+<span ref={(ref) => (dataRefs.current[0] = ref)}>0</span> mi</h3>
                <p>Empresas ativas no Brasil</p>
              </div>
            </div>
            <div className="card">
              <div className="card-texts">
              <h3>+<span ref={(ref) => (dataRefs.current[1] = ref)}>0</span> mi</h3>
                <p>Decisores mapeados na plataforma</p>
              </div>
            </div>
            <div className="card">
              <div className="card-texts">
              <h3>+<span ref={(ref) => (dataRefs.current[2] = ref)}>0</span> mi</h3>
                <p>Empresas com website e redes sociais</p>
              </div>
            </div>
            <div className="card">
              <div className="card-texts">
              <h3>+<span ref={(ref) => (dataRefs.current[3] = ref)}>0</span> mi</h3>
                <p>Empresas com telefones assertivos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="more-sales">
          <MoreSalesIcon />
        </div>

        <div className="clients">
          <div className="clients-inner">
            <h3>Veja o que nossos <b>clientes</b> dizem</h3>
            <div className="clients-carrousel">
              <div className="clients-texts">
                <h2>Aumento de 80% nas oportunidades</h2>
                <div className="divider"></div>
                <p>Nossa geração de leads focava em volume e o resultado era sem qualidade. Com a inteligência da Speedio, recebemos até 80% mais oportunidades de negócio e mais de 10 horas de produtividade semanal.</p>
              </div>
              <div className="user">
                <UserIcon className="user-svg" />
                <div className="user-details">
                  <span>Vanessa Andrade</span>
                  <p>Diretora de Vendas</p>
                </div>
              </div>
            </div>
            <div className="clients-carrousel">
            </div>
          </div>
        </div>

        <div className="integrations">
          <div className="integrations-texts">
            <h3>Integrações <b>nativas</b></h3>
            <p>Nossa plataforma de geração de leads B2B possui integrações nativas a ferramentas que você já usa no dia a dia.</p>
          </div>
          <div className="integrations-image">
            <IntegrationsIcon />
          </div>
        </div>

        <div className="plans">
          <h3>Conheça nossos <b>planos</b></h3>
          <PlansIcon />
        </div>

        <div className="faq">
          <h3>Tire suas <b>dúvidas</b></h3>
          <div className="faq-inner">
            <div className="faq-block">
              {questions.slice(0,3).map((question, index) => (
                <div className={showAnswerF[index] ? 'faq-block-title expanded' : 'faq-block-title'} key={index} onClick={() => toggleAnswer(index, 'F')}>
                  <p className={showAnswerF[index] ? "hidden" : ""}>{question.title}</p>
                  <p className={showAnswerF[index] ? "answer" : "hidden"}>{question.answer}</p>
                </div>
              ))}
            </div>
            <div className="faq-block">
              {questions.slice(3,6).map((question, index) => (
                <div className={showAnswerS[index] ? 'faq-block-title expanded' : 'faq-block-title'} key={index} onClick={() => toggleAnswer(index, 'S')}>
                  <p className={showAnswerS[index] ? "hidden" : ""}>{question.title}</p>
                  <p className={showAnswerS[index] ? "answer" : "hidden"}>{question.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="left-div">
            <svg width="162" height="39" viewBox="0 0 162 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.229461 23.544C-0.293081 22.9832 0.0801635 22.2321 1.31526 20.4716C1.61386 20.0977 1.91246 20.0229 2.28909 20.1725C6.29299 22.2355 8.53925 22.2355 10.3715 22.2355C14.0022 22.2355 15.5732 20.3254 13.7002 17.9259C12.7637 16.6888 9.77096 16.128 8.49853 15.7134C4.56928 14.5511 2.2857 12.9741 1.53921 10.3877C-0.03181 5.55136 3.18488 1.20445 9.54701 0.531507C11.7152 0.344579 14.1854 0.755819 16.167 1.5817C18.1113 2.55712 18.9731 3.41699 18.7492 4.05594C18.4506 4.76626 17.5514 5.85384 17.0289 6.56756C16.581 7.12834 15.1593 5.93201 13.4355 5.55476C11.9765 5.25567 10.3308 4.84103 8.19654 5.59214C5.95029 6.67972 5.50239 8.62716 7.22271 9.93905C9.01768 11.2136 11.3013 12.0021 12.6857 12.4881C14.0701 13.0115 16.279 13.7626 17.3987 15.1492C18.4099 16.1247 19.1564 18.1095 19.1564 19.6831C19.1564 23.8431 15.6377 26.4668 10.626 26.5416C6.55087 26.6164 1.80048 24.968 0.229461 23.544Z" fill="#FDFFFD"/>
            <path d="M24.9992 25.9813V1.13354C24.9992 0.759686 25.2978 0.460602 25.671 0.460602H34.388C38.9891 0.460602 42.6571 4.17196 42.6571 8.74318C42.6571 13.3518 38.9891 17.0258 34.388 17.0258H30.6488C30.0889 17.0258 29.7123 17.1753 29.7123 17.7769V25.9847C29.7123 26.3585 29.4137 26.661 29.037 26.661H25.671C25.2978 26.6542 24.9992 26.3551 24.9992 25.9813ZM34.388 12.2268C36.2949 12.2268 37.8694 10.6906 37.8694 8.73978C37.8694 6.82973 36.2983 5.29012 34.388 5.29012H30.6114C29.9769 5.29012 29.7123 5.55182 29.7123 6.04123V12.2268H34.388Z" fill="#FDFFFD"/>
            <path d="M48.0857 25.8669V1.1687C48.0857 0.794842 48.3843 0.495758 48.7575 0.495758H65.5196C65.8928 0.495758 66.1948 0.794842 66.1948 1.1687V4.31587C66.1948 4.68973 65.8962 4.98881 65.5196 4.98881H53.4332C53.06 4.98881 52.758 5.2879 52.758 5.66175V11.171C52.758 11.657 52.7207 11.8847 53.6199 11.8847H62.9747C63.3107 11.8847 63.6126 12.1464 63.6126 12.4829V15.6675C63.6126 16.0039 63.314 16.269 62.9747 16.269H53.5825C52.7987 16.269 52.758 16.942 52.758 17.1289V21.102C52.758 21.4758 52.8327 22.0026 53.8065 22.0026H65.7809C66.1541 22.0026 66.4527 22.3391 66.4527 22.7163V25.8635C66.4527 26.2374 66.1541 26.5364 65.7809 26.5364H48.7609C48.3843 26.5398 48.0857 26.2408 48.0857 25.8669Z" fill="#FDFFFD"/>
            <path d="M72.2902 25.8669V1.1687C72.2902 0.794842 72.5888 0.495758 72.9621 0.495758H89.7241C90.0974 0.495758 90.396 0.794842 90.396 1.1687V4.31587C90.396 4.68973 90.0974 4.98881 89.7241 4.98881H77.6378C77.2646 4.98881 76.9626 5.2879 76.9626 5.66175V11.171C76.9626 11.657 76.9252 11.8847 77.8244 11.8847H87.1793C87.5152 11.8847 87.8138 12.1464 87.8138 12.4829V15.6675C87.8138 16.0039 87.5152 16.269 87.1793 16.269H77.7871C77.0033 16.269 76.9626 16.942 76.9626 17.1289V21.102C76.9626 21.4758 77.0372 22.0026 78.011 22.0026H89.9854C90.3587 22.0026 90.6572 22.3391 90.6572 22.7163V25.8635C90.6572 26.2374 90.3587 26.5364 89.9854 26.5364H72.9587C72.5922 26.5398 72.2902 26.2408 72.2902 25.8669Z" fill="#FDFFFD"/>
            <path d="M101.216 25.7929V22.5336C101.216 22.0476 101.589 21.7111 102.041 21.7111H105.071C109.597 21.7111 113.265 18.0372 113.265 13.5033C113.265 8.96949 109.597 5.29552 105.071 5.29552H102.041C101.779 5.29552 101.593 5.48244 101.593 5.74414V14.7472C101.593 15.1959 101.219 15.5323 100.768 15.5323H97.5141C97.1035 15.5323 96.7269 15.1585 96.7269 14.7472V1.24429C96.7269 0.795665 97.1001 0.418411 97.5141 0.418411H105.074C112.295 0.418411 118.131 6.26414 118.131 13.4999C118.131 20.7323 112.295 26.5814 105.074 26.5814H102.044C101.589 26.578 101.216 26.2416 101.216 25.7929Z" fill="#FDFFFD"/>
            <path d="M123.997 25.9786V1.09345C123.997 0.719598 124.333 0.37973 124.71 0.37973H128.602C128.975 0.37973 129.277 0.716199 129.277 1.09345V25.9786C129.277 26.3524 128.979 26.6549 128.602 26.6549H124.71C124.333 26.6515 123.997 26.3524 123.997 25.9786Z" fill="#FDFFFD"/>
            <path d="M138.366 4.83915C140.874 1.80413 144.314 0.193158 147.87 0.00283216C148.318 -0.0345533 148.658 0.301916 148.695 0.791326V4.05066C148.695 4.53667 148.434 4.79837 147.908 4.83915C145.661 5.02608 143.53 6.15104 142.109 7.94894C139.041 11.6229 139.527 17.0948 143.12 20.1298C146.788 23.2022 152.176 22.7536 155.169 19.0796C157.415 16.3811 157.826 12.6323 156.255 9.52253C155.919 8.80881 155.993 8.3228 156.516 7.91156C156.927 7.68725 158.274 6.71182 158.762 6.37536C159.285 6.03889 159.923 6.22581 160.221 6.74921C162.99 11.6603 162.505 17.8425 158.912 22.1894C154.422 27.923 145.441 28.7115 140.09 23.9125C134.437 19.1204 133.687 10.5353 138.366 4.83915Z" fill="#FDFFFD"/>
            <path d="M154.659 36.3762C154.659 36.3762 153.909 36.6379 153.424 36.7875C152.976 36.937 150.991 37.5386 149.271 37.6881C147.625 37.8377 145.155 37.9872 145.155 37.9872C143.995 38.062 142.125 38.0994 141.002 38.0246C141.002 38.0246 138.942 37.9124 136.886 37.6881C134.83 37.4264 132.658 36.7501 132.658 36.7501L131.535 36.3762C131.05 36.2267 130.673 35.7033 130.673 35.2139V33.3412C130.673 32.8552 131.084 32.5527 131.535 32.6683L132.658 32.9674C136.811 34.0175 138.084 34.3914 141.002 34.4662C142.125 34.4662 143.995 34.4288 145.155 34.3914C145.155 34.3914 147.327 34.2419 149.271 34.0175C151.215 33.7932 153.499 33.0795 153.499 33.0795L154.659 32.7057C155.107 32.5935 155.484 32.8552 155.484 33.3446V35.2173C155.48 35.7033 155.107 36.2267 154.659 36.3762Z" fill="#FDFFFD"/>
            <path d="M154.45 13.5834C154.45 16.802 151.844 19.4121 148.631 19.4121C145.418 19.4121 142.812 16.802 142.812 13.5834C142.812 10.3649 145.418 7.75467 148.631 7.75467C151.844 7.75467 154.45 10.3649 154.45 13.5834Z" fill="#6AABDD"/>
            </svg>
            <p>Copyright © 2022 Speedio. Todos os direitos reservados.</p>
            <p>Termos de uso & Política de Privacidade</p>
          </div>
          <svg width="229" height="36" viewBox="0 0 229 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.8906 0C8.02579 0 0 8.0258 0 17.8906C0 27.7554 8.02579 35.7812 17.8906 35.7812C27.7555 35.7812 35.7812 27.7554 35.7812 17.8906C35.7812 8.0258 27.7555 0 17.8906 0ZM17.8906 2.68359C26.3051 2.68359 33.0977 9.47612 33.0977 17.8906C33.0977 25.3875 27.7011 31.5827 20.5742 32.8478V22.3633H23.8169C24.2677 22.3633 24.649 22.0261 24.7044 21.5788L25.0399 18.8952C25.0721 18.6412 24.9915 18.3861 24.8215 18.1929C24.6524 18.0006 24.4091 17.8906 24.1523 17.8906H20.5742V14.7598C20.5742 13.7731 21.3766 12.9707 22.3633 12.9707H24.1523C24.6461 12.9707 25.0469 12.5708 25.0469 12.0762V9.05713C25.0469 8.59376 24.6934 8.20724 24.2327 8.16609C24.1799 8.16162 22.9179 8.05078 21.3202 8.05078C17.378 8.05078 15.207 10.391 15.207 14.641V17.8906H11.6289C11.1351 17.8906 10.7344 18.2905 10.7344 18.7852V21.4688C10.7344 21.9634 11.1351 22.3633 11.6289 22.3633H15.207V32.8478C8.08014 31.5827 2.68359 25.3875 2.68359 17.8906C2.68359 9.47612 9.47611 2.68359 17.8906 2.68359Z" fill="#95A5A6"/>
          <path d="M59.3704 1.19238C53.6054 1.19238 48.9028 5.89496 48.9028 11.66V25.3133C48.9028 31.0776 53.6052 35.7809 59.3704 35.7809H73.0238C78.7882 35.7809 83.4914 31.0777 83.4914 25.3133V11.66C83.4914 5.89479 78.788 1.19238 73.0238 1.19238H59.3704ZM59.3704 3.92306H73.0238C77.3121 3.92306 80.7607 7.3708 80.7607 11.66V25.3133C80.7607 29.6015 77.3119 33.0503 73.0238 33.0503H59.3704C55.0812 33.0503 51.6335 29.6016 51.6335 25.3133V11.66C51.6335 7.37063 55.0811 3.92306 59.3704 3.92306ZM75.2994 7.56396C74.2936 7.56396 73.4789 8.37861 73.4789 9.38441C73.4789 10.3902 74.2936 11.2049 75.2994 11.2049C76.3051 11.2049 77.1198 10.3902 77.1198 9.38441C77.1198 8.37861 76.3051 7.56396 75.2994 7.56396ZM66.1971 9.38441C61.1865 9.38441 57.0949 13.476 57.0949 18.4867C57.0949 23.4973 61.1865 27.5889 66.1971 27.5889C71.2077 27.5889 75.2994 23.4973 75.2994 18.4867C75.2994 13.476 71.2077 9.38441 66.1971 9.38441ZM66.1971 12.1151C69.7317 12.1151 72.5687 14.9521 72.5687 18.4867C72.5687 22.0212 69.7317 24.8582 66.1971 24.8582C62.6625 24.8582 59.8255 22.0212 59.8255 18.4867C59.8255 14.9521 62.6625 12.1151 66.1971 12.1151Z" fill="#95A5A6"/>
          <path d="M209.193 3.57812C203.51 3.57812 198.23 3.98301 195.217 4.61243C195.211 4.61413 195.205 4.61587 195.198 4.61767C192.928 5.12628 190.791 6.75213 190.341 9.29823C190.341 9.30172 190.34 9.30522 190.339 9.30872C189.994 11.3608 189.641 14.0358 189.641 17.8906C189.641 21.7381 189.995 24.3423 190.432 26.5022C190.893 28.9732 192.981 30.6483 195.286 31.1636C195.297 31.1666 195.308 31.1695 195.319 31.1723C198.463 31.7919 203.594 32.2031 209.277 32.2031C214.959 32.2031 220.093 31.7919 223.238 31.1723C223.249 31.1695 223.26 31.1666 223.271 31.1636C225.541 30.655 227.678 29.0291 228.128 26.483C228.129 26.4766 228.13 26.4702 228.132 26.4638C228.472 24.3699 228.913 21.6974 229 17.8365C229 17.8266 229 17.8167 229 17.8068C229 13.9437 228.558 11.252 228.126 9.12002C227.669 6.64375 225.579 4.96418 223.271 4.4482C223.236 4.44036 223.2 4.43395 223.165 4.42898C220.096 3.99762 214.876 3.57812 209.193 3.57812ZM209.193 6.26172C214.703 6.26172 219.81 6.67442 222.709 7.07763C224.133 7.40514 225.265 8.40022 225.488 9.60748C225.489 9.61506 225.49 9.62263 225.492 9.63019C225.908 11.6844 226.313 14.127 226.315 17.7875C226.231 21.4598 225.825 23.9239 225.485 26.0183C225.252 27.323 224.162 28.2085 222.696 28.5411C219.88 29.0936 214.815 29.5195 209.277 29.5195C203.738 29.5195 198.673 29.0919 195.859 28.5394C194.429 28.2146 193.292 27.2165 193.068 26.0061C193.067 25.9985 193.065 25.9909 193.063 25.9833C192.652 23.9521 192.324 21.5839 192.324 17.8906C192.324 14.204 192.651 11.738 192.983 9.76646C193.214 8.45832 194.307 7.57059 195.777 7.23837C198.384 6.69487 203.649 6.26172 209.193 6.26172ZM206.154 10.3081C204.551 10.3601 203.059 11.6516 203.059 13.4057V21.4827C203.059 23.8216 205.712 25.3384 207.744 24.1908C207.744 24.1902 207.744 24.1896 207.744 24.189L214.892 20.1514C216.939 18.995 216.939 15.8917 214.892 14.7353L207.744 10.6977C207.236 10.4108 206.689 10.2907 206.154 10.3081ZM206.165 12.9532C206.246 12.9576 206.334 12.9828 206.424 13.0336L213.571 17.073C213.934 17.278 213.934 17.6104 213.571 17.8155L206.424 21.8531C206.064 22.0563 205.742 21.8668 205.742 21.4827V13.4057C205.742 13.2137 205.823 13.0706 205.948 13.0004C206.011 12.9653 206.084 12.9489 206.165 12.9532Z" fill="#95A5A6"/>
          <path d="M114.5 0C104.635 0 96.6094 8.026 96.6094 17.8906C96.6094 20.8205 97.3811 23.5591 98.6326 26.0008L96.6932 32.9439C96.2415 34.5571 97.8366 36.1521 99.4502 35.7009L106.399 33.7616C108.838 35.0104 111.573 35.7812 114.5 35.7812C124.365 35.7812 132.391 27.7553 132.391 17.8906C132.391 8.026 124.365 0 114.5 0ZM114.5 2.68359C122.914 2.68359 129.707 9.4764 129.707 17.8906C129.707 26.3048 122.914 33.0977 114.5 33.0977C111.815 33.0977 109.303 32.3995 107.113 31.1793C106.804 31.0072 106.44 30.9639 106.1 31.0588L99.4921 32.902L101.337 26.2978C101.432 25.9568 101.389 25.5919 101.217 25.2827C99.994 23.091 99.293 20.5783 99.293 17.8906C99.293 9.4764 106.086 2.68359 114.5 2.68359ZM108.453 9.84159C108.168 9.84159 107.707 9.94863 107.314 10.3762C106.922 10.802 105.819 11.8347 105.819 13.9369C105.819 16.039 107.348 18.0691 107.562 18.3554C107.775 18.6389 110.517 23.0919 114.86 24.804C118.468 26.2263 119.202 25.9431 119.986 25.8715C120.77 25.8017 122.514 24.8397 122.871 23.8414C123.227 22.8431 123.227 21.9892 123.122 21.8129C123.016 21.6349 122.73 21.527 122.303 21.3133C121.876 21.0995 119.777 20.0665 119.385 19.9243C118.993 19.7821 118.707 19.7099 118.422 20.1374C118.138 20.565 117.32 21.5267 117.07 21.8112C116.82 22.0974 116.572 22.1333 116.144 21.9195C115.716 21.7039 114.341 21.2539 112.707 19.7985C111.437 18.6669 110.583 17.2682 110.333 16.8406C110.084 16.4148 110.306 16.1808 110.52 15.9688C110.712 15.7774 110.947 15.4706 111.161 15.221C111.373 14.9714 111.444 14.7944 111.586 14.5099C111.728 14.2264 111.657 13.9759 111.551 13.7622C111.444 13.5484 110.614 11.4347 110.234 10.5894C109.914 9.87911 109.578 9.8637 109.273 9.85207C109.024 9.84223 108.738 9.84159 108.453 9.84159Z" fill="#95A5A6"/>
          <path d="M149.236 2.38574C146.535 2.38574 144.316 4.60438 144.316 7.30566V29.6689C144.316 32.3702 146.535 34.5889 149.236 34.5889H171.599C174.3 34.5889 176.519 32.3702 176.519 29.6689V7.30566C176.519 4.60438 174.3 2.38574 171.599 2.38574H149.236ZM149.236 5.06934H171.599C172.85 5.06934 173.835 6.05491 173.835 7.30566V29.6689C173.835 30.9197 172.85 31.9053 171.599 31.9053H149.236C147.985 31.9053 147 30.9197 147 29.6689V7.30566C147 6.05491 147.985 5.06934 149.236 5.06934ZM152.814 8.64746C152.221 8.64746 151.652 8.88307 151.233 9.30247C150.813 9.72186 150.578 10.2907 150.578 10.8838C150.578 11.4769 150.813 12.0457 151.233 12.4651C151.652 12.8845 152.221 13.1201 152.814 13.1201C153.407 13.1201 153.976 12.8845 154.395 12.4651C154.815 12.0457 155.05 11.4769 155.05 10.8838C155.05 10.2907 154.815 9.72186 154.395 9.30247C153.976 8.88307 153.407 8.64746 152.814 8.64746ZM151.472 14.9092C150.977 14.9092 150.578 15.309 150.578 15.8037V27.4326C150.578 27.9273 150.977 28.3271 151.472 28.3271H154.156C154.65 28.3271 155.05 27.9273 155.05 27.4326V15.8037C155.05 15.309 154.65 14.9092 154.156 14.9092H151.472ZM157.734 14.9092C157.239 14.9092 156.839 15.309 156.839 15.8037V27.4326C156.839 27.9273 157.239 28.3271 157.734 28.3271H160.417C160.912 28.3271 161.312 27.9273 161.312 27.4326V20.7236C161.312 19.4901 162.315 18.4873 163.548 18.4873C164.782 18.4873 165.785 19.4901 165.785 20.7236V27.4326C165.785 27.9273 166.185 28.3271 166.679 28.3271H169.363C169.857 28.3271 170.257 27.9273 170.257 27.4326V20.2764C170.257 17.3164 167.85 14.9092 164.89 14.9092C163.514 14.9092 162.263 15.4334 161.312 16.2877V15.8037C161.312 15.309 160.912 14.9092 160.417 14.9092H157.734Z" fill="#95A5A6"/>
          </svg>
        </div>
      </div>
    </>
  )
}

export default App
