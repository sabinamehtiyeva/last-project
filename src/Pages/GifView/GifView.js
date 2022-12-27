import React, { useEffect, useState, useRef } from 'react'
import './GifView.css'
import Loading from '../../Components/ui/Loading'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Heart from '../../Components/Heart/Heart'
import SearchSuggestions from '../../Components/SearchSuggestions/SearchSuggestions'
import { setSuggestions } from '../../Redux/action';
import Related from '../../Components/Related/Related'

// icons
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs'
import { TbCopy } from 'react-icons/tb'
import { BsThreeDots } from 'react-icons/bs'


// daxili state
const getData = async (name) => {
   const response = fetch(`https://g.tenor.com/v1/gifs?ids=${name}&key=O2F76B8G7S1C`)
   const data = (await response).json()
   return data
}

function GifView() {
   const [gifItem, setGifItem] = useState('')
   const [status, setStatus] = useState(false)
   const [clipboardVisible, setClipboardVisible] = useState(false)
   const [buttonActive, setButtonActive] = useState({
      activeObject: 1,
      objects: [
         { id: 1, content: ' ● SD GIF' },
         { id: 2, content: ' ● HD GIF' },
         { id: 3, content: ' ● MP4' }
      ]
   })
   const { name } = useParams()

   const getSuggestions = useSelector(state => state.searchSuggestions)
   const dispatch = useDispatch()

   const heartRef = useRef()

   const statusFunc = () => {
      setStatus(true)
   }

   //clipboard function
   const clpFunc = () => {
      setClipboardVisible(false)
   }
   const shareClick = (e) => {
      navigator.clipboard.writeText(e.target.value)
      setClipboardVisible(true)
      setTimeout(clpFunc, 1000)
      clearTimeout(clpFunc)
   }

   useEffect(() => {
      setTimeout(statusFunc, 600);
      getData(name).then(data => {
         if (data.results) {
            setGifItem(data.results)
            // data.results.length && suggestion = gifItem[0].content_description.split(' ')[0]
            dispatch(setSuggestions(data.results[0].content_description.split(' ')[0]))
         }
         else {
            setGifItem(data.code)
         }
      })
      return () => {
         clearTimeout(statusFunc)
      }
   }, [name, dispatch])

   const toggleActive = (index) => {
      setButtonActive({
         ...buttonActive,
         activeObject: buttonActive.objects[index]
      })
   }


   if (gifItem === 3) {
      return (status && <NotFoundPage error='400' />)
   }
   return (
      status ? (
         !gifItem.length ? <NotFoundPage error='400' /> :
            <div className='gif-item'>
               <div className="container">
                  <h3>{gifItem[0].content_description}</h3>

                  <div className="gif-item-wrapper">
                     {/* left section */}
                     <div className="left">
                        <div className="big-gif" style={{ height: `${gifItem[0].media[0].mediumgif.dims[1]}px` }}>
                           <img src={gifItem[0].media[0].mediumgif.url} alt="" />
                        </div>

                        <div className="gif-actions">
                           <div className="change-media">
                              {buttonActive.objects.map((element, index) => (
                                 <button
                                    onClick={() => toggleActive(index)}
                                    className={`${buttonActive.objects[index] === buttonActive.activeObject && 'active'}`}
                                    key={element.id}
                                 >
                                    {element.content}
                                 </button>
                              ))}
                           </div>
                           {/* like gif */}
                           <Heart item={gifItem[0]} ref={heartRef} />
                        </div>
                        <div className="share-social-media">
                           <a target='_blank' rel='noreferrer' href='https://www.facebook.com/' title='Facebook'><BsFacebook className='icon' /></a>
                           <a target='_blank' rel='noreferrer' href='https://twitter.com/' title='Twitter'><BsTwitter className='icon' /></a>
                           <a target='_blank' rel='noreferrer' href='https://www.instagram.com/hebib_mustafa/' title='Instagram'><BsInstagram className='icon' /></a>
                           <a target='_blank' rel='noreferrer' href='https://www.pinterest.com/' title='Pinterest'><BsPinterest className='icon' /></a>
                           <span title='Copy Link?'>
                              <TbCopy className='icon' />
                           </span>
                           <span title='Addition...'>
                              <BsThreeDots className='icon' />
                           </span>
                        </div>
                        <div className="suggestions">
                           <div className='search-suggestions'>
                              {getSuggestions ? getSuggestions.map((item, index) => (
                                 <SearchSuggestions key={index} item={item} />
                              )) : null}
                           </div>
                        </div>
                        <div className="share-url">
                           <h5>Share URL</h5>
                           {clipboardVisible && <span className="clipboard">Copied to Clipboard</span>}
                           <input
                              type='text'
                              readOnly={true}
                              className="url"
                              value={gifItem[0].media[0].gif.url}
                              onClick={(e) => shareClick(e)}
                           />
                           {/* {} */}
                        </div>
                        <div className="gif-details">
                           <h5>Details</h5>
                           <p>File Size: {Math.floor(gifItem[0].media[0].gif.size / 1024)}KB</p>
                           <p>Duration: {gifItem[0].media[0].mp4.duration} sec</p>
                           <p>
                              Dimensions: {gifItem[0].media[0].gif.dims[0]}x{gifItem[0].media[0].mediumgif.dims[1]}
                           </p>
                        </div>
                     </div>

                     {/* right section */}
                     <div className="right">
                        {/* Releated GIFs */}
                        <h3>Related GIFs</h3>
                        <Related name={gifItem[0].content_description.split(' ').slice(0, 2).join(' ')} />
                     </div>

                  </div>
               </div>
            </div>
      ) : <Loading />
   )
}

export default GifView