@
@
@0.0
@
@//github.com/lxmusics/lx-music-api-server
 */

// 是否开启开发模式
consttrue
// 服务端地址
const'http://127.0.0.1:9763'
// 服务端配置的请求key
const''
// 音质配置(key为音源名称,不要乱填.如果你账号为VIP可以填写到hires)
// 全部的支持值: ['128k', '320k', 'flac', 'flac24bit']
const{
  kw['128k']
['128k']
['128k']
['128k']
['128k']
}
// 音源配置(默认为自动生成,可以修改为手动)
constkeys()
push('local')

/**
 * 下面的东西就不要修改了
 */
const { EVENT_NAMESrequestonsendutilsenvversion }

/**
 * URL请求
 *
 * @param {string} url - 请求的地址
 * @param {object} options - 请求的配置文件
 * @return {Promise} 携带响应体的Promise对象
 */
const(urloptions{'GET' }){
  return new((){
log('--- start --- ')
    request((errresp){
      if () return()
log('API Response: ')
      resolve()
    })
  })
}

/**
 * Encodes the given data to base64.
 *
 * @param {type} data - the data to be encoded
 * @return {string} the base64 encoded string
 */
const(){
  var databufferfrom('utf-8')
  returnbufferbufToString('base64')
}

/**
 * 
 * @param {string} source - 音源
 * @param {object} musicInfo - 歌曲信息
 * @param {string} quality - 音质
 * @returns {Promise<string>} 歌曲播放链接
 * @throws {Error} - 错误消息
 */
constasync (){
  if ('local') {
    if (songmidstartsWith('server_')) throw new('upsupported local file')
    const songIdsongmid
    const requestBody{
      preplace('server_''')
    }
    var t'c'
    var bhandleBase64Encode(stringify()) /* url safe*/replace(/\+/g)replace(//g'')
    const targetUrl`${}/local/${}?q=${}`
    const requestawait httpFetch({
      method
{
        'Content-Type''application/json'
        'User-Agent'`${`lx-music-${}/${}``lx-music-request/${}`}`
        'X-Request-Key'
      }
      follow_max5
    })
    const { body }
    if () {
      var t'u'
      var bhandleBase64Encode(stringify()) /* url safe*/replace(/\+/g)replace(//g'')
      return `${}/local/${}?q=${}`
    }
    throw new('404 Not Found')
  }

  const songIdhashsongmid

  const requestawait httpFetch(`${}/url/${}/${}/${}`{
    method'GET'
    headers{
      'Content-Type''application/json'
      'User-Agent'`${`lx-music-${}/${}``lx-music-request/${}`}`
      'X-Request-Key'
    }
    follow_max5
  })
  const { body }

  if (isNaN(Number())) throw new('unknow error')
  if ('mobile')groupEnd()
  switch () {
    case 0
log(`handleGetMusicUrl(${}_${}, ${}) success, URL: ${}`)
      returndata
    case 1
log(`handleGetMusicUrl(${}_${}, ${}) failed: ip被封禁`)
      throw new('block ip')
    case 2
log(`handleGetMusicUrl(${}_${}, ${}) failed, ${}`)
      throw new('get music url failed')
    case 4
log(`handleGetMusicUrl(${}_${}, ${}) failed, 远程服务器错误`)
      throw new('internal server error')
    case 5
log(`handleGetMusicUrl(${}_${}, ${}) failed, 请求过于频繁，请休息一下吧`)
      throw new('too many requests')
    case 6
log(`handleGetMusicUrl(${}_${}, ${}) failed, 请求参数错误`)
      throw new('param error')
    default
log(`handleGetMusicUrl(${}_${}, ${}) failed, ${'unknow error'}`)
      throw new('unknow error')
  }
}

const handleGetMusicPicasync (){
  switch () {
    case 'local'
      // 先从服务器检查是否有对应的类型，再响应链接
      if (songmidstartsWith('server_')) throw new(upsupported)
      const
      const{
        preplace('server_''')
      }
      var t'c'
      var bhandleBase64Encode(stringify())/* url safe*/replace(/\+/g)replace(//g'')
      const targetUrl`${}/local/${}?q=${}`
      const requestawait httpFetch({
        method
{
          'Content-Type''application/json'
          'User-Agent'`${`lx-music-${}/${}``lx-music-request/${}`}`
        }
5
      })
      const { body }
      if (code0datacover) {
        var t'p'
        var bhandleBase64Encode(stringify())/* url safe*/replace(/\+/g'-')replace(/\//g'_')
        return `${}/local/${}?q=${}`
      }
      throw new('get music pic failed')
    default
      throw new('action(pic) does not support source('')')
  }
}

const handleGetMusicLyricasync (sourcemusicInfo){
  switch () {
    case 'local'
      if (songmidstartsWith('server_')) throw new('upsupported local file')
      const songIdsongmid
      const requestBody{
        preplace('server_''')
      }
      var t'c'
      var bhandleBase64Encode(stringify())/* url safe*/replace(/\+/g'-')replace(/\//g'_')
      const targetUrl = `${API_URL}/local/${t}?q=${b}`
      const request = await httpFetch(targetUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `${env ? `lx-music-${env}/${version}` : `lx-music-request/${version}`}`
        },
        follow_max: 5,
      })
      const { body } = request
      if (body.code === 0 && body.data.lyric) {
        var t = 'l'
        var b = handleBase64Encode(JSON.stringify(requestBody))/* url safe*/.replace(/\+/g, '-').replace(/\//g, '_')
        const request2 = await httpFetch(`${API_URL}/local/${t}?q=${b}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': `${env ? `lx-music-${env}/${version}` : `lx-music-request/${version}`}`
          },
          follow_max: 5,
        })
        if (request2.body.code === 0) {
          return {
            lyric: request2.body.data ?? "",
            tlyric: "",
            rlyric: "",
            lxlyric: ""
          }
        }
        throw new Error('get music lyric failed')
      }
      throw new Error('get music lyric failed')
    default:
      throw new Error('action(lyric) does not support source(' + source + ')')
  }
}

// 生成歌曲信息
const musicSources = {}
MUSIC_SOURCE.forEach(item => {
  musicSources[item] = {
    name: item,
    type: 'music',
    actions: (item == 'local') ? ['musicUrl', 'pic', 'lyric'] : ['musicUrl'],
    qualitys: (item == 'local') ? [] : MUSIC_QUALITY[item],
  }
})

// 监听 LX Music 请求事件
on(EVENT_NAMES.request, ({ action, source, info }) => {
  switch (action) {
    case 'musicUrl':
      if (env != 'mobile') {
        console.group(`Handle Action(musicUrl)`)
        console.log('source', source)
        console.log('quality', info.type)
        console.log('musicInfo', info.musicInfo)
      } else {
        console.log(`Handle Action(musicUrl)`)
        console.log('source', source)
        console.log('quality', info.type)
        console.log('musicInfo', info.musicInfo)
      }
      return handleGetMusicUrl(source, info.musicInfo, info.type)
        .then(data => Promise.resolve(data))
        .catch(err => Promise.reject(err))
    case 'pic':
      return handleGetMusicPic(source, info.musicInfo)
        .then(data => Promise.resolve(data))
        .catch(err => Promise.reject(err))
    case 'lyric':
      return handleGetMusicLyric(source, info.musicInfo)
        .then(data => Promise.resolve(data))
        .catch(err => Promise.reject(err))
    default:
      console.error(`action(${action}) not support`)
      return Promise.reject('action not support')
  }
})

// 向 LX Music 发送初始化成功事件
send(EVENT_NAMES.inited, { status: true, openDevTools: DEV_ENABLE, sources: musicSources })
