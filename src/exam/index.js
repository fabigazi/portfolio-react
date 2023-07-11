
import { useEffect } from 'react';
import './index.css';

function Exam() {
    // const qwe = 987; // __2__ is assigned the value 321
    // const asd = 321;
    // const ytr = [321, qwe, 432, asd, 987]; // __3__ is assigned the array [321, qwe, 432, asd, 987]
    // const [rew, ewq] = ytr; // __1__ is assigned the value 321, rew is assigned the value 321
    // console.log(rew); // Prints 321
    // console.log(ewq); // Prints 987

    const qwe = { asd: 123, sdf: 432 }
    const cxz = { sdf: 345, ...qwe, asd: 456, zxc: 567 }
    const { sdf, asd } = cxz
    console.log(asd)
    console.log(sdf)

    const y = [123, 234, 345, 456]
    const z = [234, ...y]
    console.log(z)
    return (
        <div>
            <h1>Exam</h1>
            <p>
                1,4,12,22
            </p>
            <div>
                <text>
                    Elements: <br />
                    new line: {"<br/>"} <br />
                    l curly bracket: {"{"}<br />
                    r curly bracket: {"}"}<br />
                </text>

                <h3>Problem 1 = 2</h3>
                <h6>Prompt</h6>
                <p>
                    14:00
                    Fill in the blanks below to compete code the snippet. only use lowercase
                    , no qutations, no extra spaces <br />
                    Declare a Mongoose schema with a field called mango of type Nubmer that stores
                    its documents to a collection called quiz
                </p>
                <h6>Code</h6>
                <p>
                    import mongoose from "mongoose" <br />
                    const schema = new ____1____.____2____( <br />
                    {"{mongo: ____3____}"} <br />
                    {"{____4____: "} "{"____5___"} " {"}"} <br />
                    ) <br />
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>mongoose</li>
                    <li>Schema</li>
                    <li>Number</li>
                    <li>collection</li>
                    <li>quiz</li>
                </ol>


                <h3>Problem 2 = 3</h3>
                <h6>Prompt</h6>
                <p>
                    20:00
                    Consider the following code.

                    what would be the responses from the
                    server for each fo the folling queries in the order shown below
                </p>
                <h6>Code</h6>
                <p>

                    function Controller(app)  {"{"}<br />
                    <text class="tab1">contst qwe = (wer, ert) ={">"} {"{"}</text> <br />
                    <text class="tab2"> wer.session['yui'] = wer.params['uio']</text> <br />
                    <text class="tab2"> ert.send(wer.params['uio'])</text> <br />
                    <text class="tab1">{"}"}</text> <br />
                    <text class="tab1">contst asd = (sdf, dfg) ={">"} {"{"}</text> <br />
                    <text class="tab2"> dfg.send(sfd.session['yui'])</text> <br />
                    <text class="tab1">{"}"}</text> <br />
                    <text class="tab1">app.get('/asd/:uio', qwe)</text> <br />
                    <text class="tab1">app.get('/qwe/:yui', asd)</text> <br />
                    {"}"} <br />
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>http://localhost:3000/asd/123: 123</li>
                    <li>http://localhost:3000/qwe/234: 123</li>
                </ol>


                <h3>Problem 3 = 5</h3>
                <h6>Prompt</h6>
                <p>
                    21:28
                    Consider the following schema. <br />
                    school(grade: date, sub_task: string, papaya: number) <br />
                    which of the following options retireves a document by its primary key? <br />
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>school.findOne("TUITION")</li>
                    <li>school.find("TUITION")</li>
                    <li class="color">school.find({"{"}_id: "TUITION"{"}"}) or school.findById("TUITION")</li>
                    <li>school.find({"{"}grade: "TUITION"{"}"})</li>
                    <li>school.findById({"{"}_id: "TUITION"{"}"})</li>
                </ol>


                <h3>Problem 4 = 6</h3>
                <h6>Prompt</h6>
                <p>
                    25:43
                    Consider the following code.

                    what would be the responses from the
                    server for each fo the folling queries in the order shown below
                </p>
                <h6>Code</h6>
                <p>
                    import React, {"{"}useState, useEffect{"}"} from "react"; <br />
                    import {"{"}findAllrugsThunk{"}"} from "./rugThunks"; <br />
                    import React, {"{"}useSelector, useDispatch{"}"} from "react-redux"; <br />

                    export const RugList = () ={">"} {"{"} <br />
                    <text class="tab1">const ____1____ = ____2____((state) ={">"} state.rugs);</text> <br />
                    <text class="tab1">const dispatch = ____3____()</text> <br />
                    <text class="tab1">useEffect(() ={">"} {"{"} </text> <br />
                    <text class="tab2">const fetchRugs = async (() ={">"} {"{"})</text> <br />
                    <text class="tab3">await ____4____(____5____());</text> <br />
                    <text class="tab2"></text> {"}"};<br />
                    <text class="tab2"></text>fetchRugs(); <br />
                    <text class="tab1"></text> {"}"}, []);<br />
                    <text class="tab1"> return (</text> <br />
                    <text class="tab2">{"<"}div{">"}</text> <br />
                    <text class="tab3">{"<"}h1{">"}Rug list{"<"}/h1{">"}</text> <br />
                    <text class="tab3">{"<"}ul{">"}</text> <br />

                    <text class="tab4">{"{"}rugs.____6____((rug) ={">"} (</text> <br />
                    <text class="tab4">{"<"}li key={"{"}____7____.rugId{"}"}{">"}{"{"}____7____.rugId{"}"}{"<"}/li{">"}</text> <br />
                    <text class="tab4">)){"}"}</text> <br />
                    <text class="tab3">{"<"}/ul{">"}</text> <br />
                    <text class="tab2">{"<"}/div{">"}</text> <br />
                    <text class="tab1"></text> );<br />
                    {"}"};<br />
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>rugs</li>
                    <li>useSelector</li>
                    <li>useDispatch</li>
                    <li>dispatch</li>
                    <li>findAllRugsThunk</li>
                    <li>map</li>
                    <li>rug</li>
                </ol>


                <h3>Problem 5</h3>
                <h6>Prompt</h6>
                <p>
                    28:00
                    What does <b>HTML</b> standfor? Writ the meaning of each letter in the blanks below.
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>Hyper</li>
                    <li>Text</li>
                    <li>Model</li>
                    <li>Language</li>
                </ol>


                <h3>Problem 6</h3>
                <h6>Prompt</h6>
                <p>
                    28:00
                    What does <b>SPA</b> standfor? Writ the meaning of each letter in the blanks below.
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>Hyper</li>
                    <li>Text</li>
                    <li>Model</li>
                </ol>


                <h3>Problem 7</h3>
                <h6>Prompt</h6>
                <p>
                    28:00
                    What does <b>CSS</b> standfor? Writ the meaning of each letter in the blanks below.
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>Cascading</li>
                    <li>Style</li>
                    <li>Sheets</li>
                </ol>


                <h3>Problem 8 = 10</h3>
                <h6>Prompt</h6>
                <p>
                    28:26
                    Consider the following code snippet.
                </p>
                <h6>Code</h6>
                <p>
                    <b>Reducer.js</b><br />
                    import React, {"{"}createSlice{"}"} from "@reduxjs/tookit"; <br /><br />

                    const tu = createSlice({"{"}<br />
                    <text class="tab1">name: "tu",</text> <br />
                    <text class="tab1"> initialState: {"{"}vz: 10{"}"},</text> <br />
                    <text class="tab1"> reducers: {"{"}</text> <br />
                    <text class="tab1">reducers: {"{"}</text> <br />
                    <text class="tab2">tc: (cl) = {">"} {"{"}</text> <br />
                    <text class="tab3">cl.vz += 9</text> <br />
                    <text class="tab12">{"}"},</text> <br />
                    <text class="tab2">oo: (cl) = {">"} {"{"}</text> <br />
                    <text class="tab3">cl.vz -= 3</text> <br />
                    <text class="tab2">{"}"}</text> <br />
                    <text class="tab1">{"}"}</text> <br />
                    {"}"}) <br />
                    export const {"{"}tc, oo{"}"} = tu.actions <br />
                    export default tu.reducer <br />
                </p>

                <p>
                    <b>App.js</b><br />
                    import tu from "./reducer" <br />
                    import {"{"}configureStore{"}"} from "@reduxjs/tookit"; <br />
                    import {"{"}Provider{"}"} from "react-redux"; <br />
                    import SN from "./SN"; <br /><br />

                    const store = configureStore({"{"} <br />
                    <text class="tab1">reducer: tu</text> <br />
                    {"}"})<br />

                    const App = () ={">"}  <br />
                    <text class="tab1">{"<"}Provider store={"{"}store{"}"}{">"}</text> <br />
                    <text class="tab2">{"<"}SN/{">"}</text> <br />
                    <text class="tab1">{"<"}/Provider{">"}</text> <br />
                </p>
                <p>
                    <b>SN.js</b><br />
                    import React from "react" <br />
                    import {"{"}useSelector, useDispatch{"}"} from "react-redux"; <br />
                    import {"{"}tc, oo{"}"} from "./reducer" <br /><br />

                    const SN = () ={">"} {"{"} <br />
                    <text class="tab1">const:  {"{"}vz{"}"} = useSelector(fn = {">"} fn)</text> <br />
                    <text class="tab1">const dispatch = useDispatch()</text> <br />
                    <text class="tab1">return (</text> <br />
                    <text class="tab1">{"<"}div{"{"}store{"}"}{">"}</text> <br />
                    <text class="tab2">{"<"}h1{">"}{"{"}vz{"}"}{"<"}/h1{">"}</text> <br />
                    <text class="tab1">{"<"}button onClick={"{"}() ={">"} dispatch(tc()){"}"}{">"}UF{"<"}/button{">"}</text> <br />
                    <text class="tab1">{"<"}button onClick={"{"}() ={">"} dispatch(oo()){"}"}{">"}KD{"<"}/button{">"}</text> <br />
                    <text class="tab1">{"<"}/div{">"}</text> <br />
                    <text class="tab1">)</text> <br />
                    {"}"} <br />

                    export default SN
                </p>
                <h6>Answer</h6>
                <ol>
                    <li>what does h1 display when the application first renders: 10</li>
                    <li>what does h1 display if you then press button UF: 19</li>
                    <li>what does h1 display if you then press button KD: 16</li>
                </ol>


                <h3>Problem 9 = 11</h3>
                <h6>Prompt</h6>
                <p>
                    31:00
                    Consider the following code snippet.

                    fill in the blanks to create a web service to RESTful API.
                </p>
                <h6>Code</h6>
                <p>
                    <b>Services.js</b><br />
                    import axios from "axios"; <br /><br />

                    export const createAvocodo = async (avocado) <br />
                    <text class="tab1">={">"} ____6____ ____1____.____2____("http://localhost:4000/api/avocados", avocado)</text> <br />
                    export const readAllAvocados = async (avocado) <br />
                    <text class="tab1">={">"} ____6____ ____1____.____3____("http://localhost:4000/api/avocados")</text> <br />
                    export const readOneAvocado = async (____7____) <br />
                    <text class="tab1">={">"} ____6____ ____1____.____3____("http://localhost:4000/api/avocados" + avocadoId)</text> <br />
                    export const updateAvocado = async (____7____, avocado) <br />
                    <text class="tab1">={">"} ____6____ ____1____.____4____("http://localhost:4000/api/avocados" + avocadoId, avocado)</text> <br />
                    export const removeAvocado = async (____7____) <br />
                    <text class="tab1">={">"} ____6____ ____1____.____5____("http://localhost:4000/api/avocados" + avocadoId)</text> <br />
                </p>

                <h6>Answer</h6>

                <ol>
                    <li>axios</li>
                    <li>post</li>
                    <li>get</li>
                    <li>put</li>
                    <li>delete</li>
                    <li>await</li>
                    <li>avocadoId</li>
                </ol>

                <h3>Problem 10 = 13</h3>
                <h6>Prompt</h6>
                <p>
                    Consider the following code snippet.

                    fill in the blanks to create a web service to RESTful API.
                </p>
                <h6>Code</h6>
                <p>
                    import axios from "axios"<br /><br />

                    const orangeSlice = createSlice({"{"}
                    <text class="tab1">name: "orange",</text> <br />
                    <text class="tab1">initialState: {"{"} </text> <br />
                    <text class="tab2">oranges: [], </text> <br />
                    <text class="tab2">orange: {"{"} {"}"}, </text> <br />
                    <text class="tab2">loading: false, </text> <br />
                    <text class="tab2">error: null, </text> <br />
                    <text class="tab1">{"}"}, </text> <br />
                    <text class="tab1">additionalReducers: {"{"} </text> <br />
                    <text class="tab2">[___1___OrangeThunk.___5___]: (___3___, {"{"}___4___{"{}"}) ={">"} {"{"} </text> <br />
                    const index = ___3___.oranges.findIndex(orange ={">"} orange.orangeId === ___4___.orangeId)
                    <text class="tab2">___3___.oranges[ index] = ___4___{"}"}, </text> <br />
                    <text class="tab2">[ ___2___OrangeThunk.___5___]: (___3___, {"{"}___4___{"}"}) ={">"} {"{"}___3___.oranges = ___3___.oranges.filter(orange = {">"} orange.orangeId !== ___4___)</text> <br />
                    <text class="tab2">{"}"} </text> <br />
                    <text class="tab1">{"}"},</text> <br />
                    {"}"})
                    export default orangeSlice.reducer
                    export const {"{"}orangeAdded, orangeUpdated, orangeRemoved{"}"} = orangeSlice.actions

                </p>

                <h6>Answer</h6>

                <ol>
                    <li>update</li>
                    <li>delete/remove</li>
                    <li>state</li>
                    <li>payload</li>
                    <li>fulfilled</li>
                </ol>

                <h3>Problem 11 = 14</h3>
                <h6>Prompt</h6>
                <p>
                    36:00
                    Consider the following schema

                    watermelon(version: date, due_date: string, section: date)

                    which of the following options retrieves all the documents?
                    watermelon.find()
                    findall(watermelon)
                    watermelon.findAll()
                    find(watermelon)
                    watermelon()
                    find.watermeoon()
                </p>
                <h6>Code</h6>
                <p>

                </p>

                <h6>Answer</h6>

                <ol>
                    <li>find(watermelon)</li>
                    <li>watermelon.findAll()</li>
                    <li>watermelon()</li>
                    <li>findAll(watermelon)</li>
                    <li>find.watermelon()</li>
                    <li class="color">watermelon.find()</li>
                </ol>

                <h3>Problem 12 = 15</h3>
                <h6>Prompt</h6>
                <p>
                    38:48
                    Consider the following code snippet.

                    Fill in the blanks to fetch a single proifile by id from the server, let's the user update the profile's name, and then save the updated profile to the server.
                </p>
                <h6>Code</h6>
                <p>

                    <b>ProfileUpdate.js</b><br />
                    import React, {"{"}useState, useEffect{"}"} from "react";<br />
                    import * as profileService from "./profileService";<br />
                    import {"{"}useParams{"}"} from "react-router-dom";<br /><br />

                    export const ProfileUpdate = () ={">"} {"{"}
                    <text class="tab1">const {"{"}___1___{"}"} = useParams();</text> <br />

                    <text class="tab1">const [ ___2___, ___3___ ] = useState({"{ }"});</text> <br />

                    <text class="tab1">const updateProfile = () ={">"}</text> <br />
                    <text class="tab2">                   ___4___.updateProfile(profile);</text> <br />

                    <text class="tab1">useEffect(() ={">"} {"{"}</text> <br />
                    <text class="tab2">    const fetchProfileById = async () ={">"} {"{"}</text> <br />
                    <text class="tab3">    const profile = await ___4___.findProfileById(profileId);</text> <br />
                    <text class="tab3">                    setProfile(profile);</text> <br />
                    <text class="tab2">                    {"}"};</text> <br />
                    <text class="tab2">                    fetchProfileById();</text> <br />
                    <text class="tab1">                    {"}"}, []);</text> <br />

                    <text class="tab1">return (</text> <br />
                    <text class="tab2">   {"<"}div{">"}</text> <br />
                    <text class="tab3">{"<"}h1{">"}Update Profile{"<"}/h1{">"}</text> <br />
                    <text class="tab3">{"<"}div{">"}</text> <br />
                    <text class="tab4">{"<"}label htmlFor="name"{">"}Name{"<"}/label{">"}</text> <br />
                    <text class="tab4">   {"<"}input</text> <br />
                    <text class="tab5">        type="text"</text> <br />
                    <text class="tab5">       id="name"</text> <br />
                    <text class="tab5">       value={"{"}profile.name{"}"}</text> <br />
                    <text class="tab5">        onChange={"{"}(e) ={">"} ___3___({"{"} ...___2___, ___5___: e.___6___.___7___ {"}"}){"}"}</text> <br />
                    <text class="tab4">    /{">"}</text> <br />

                    <text class="tab4">{"<"}button onClick={"{"}updateProfile{"}"}{">"}Update{"<"}/button{">"}</text> <br />
                    <text class="tab3">{"<"}/div{">"}</text> <br />
                    <text class="tab2">{"<"}/div{">"}</text> <br />
                    <text class="tab21">);</text> <br />
                    {"}"};

                    export default ProfileUpdate;
                </p>

                <h6>Answer</h6>

                <ol>
                    <li>profileId</li>
                    <li>profile</li>
                    <li>setProfile</li>
                    <li>profileService</li>
                    <li>name</li>
                    <li>target</li>
                    <li>value</li>
                </ol>

                <h3>Problem 13 = 16</h3>
                <h6>Prompt</h6>
                <p>
                    42:02
                    Consider the following code snippet.

                    Fill in the blanks to create a controller to create, retrieve, update adn remove lemons.

                </p>
                <h6>Code</h6>
                <p>

                    <b>pineappleController.js</b><br />
                    import * as pineappleDao from "pineappleDao"<br /><br />
                    function PineappleController(app) {"{"}<br />
                    <text class="tab1">  const createPineapple = async (req, res) ={">"} {"{"}</text> <br />
                    <text class="tab2">   const pineapple = req.___7___</text> <br />
                    <text class="tab2">   const newPineapple = await pineappleDao.createPineapple(pineapple)</text> <br />
                    <text class="tab2">   res.json(newPineapple)</text> <br />
                    <text class="tab1">    {"}"}</text> <br />
                    <text class="tab1">  const readOnePineapple = async (req, res) ={">"} {"{"}</text> <br />
                    <text class="tab2">   const {"{"}pineappleId{"}"} = req.___6___</text> <br />
                    <text class="tab2">   const pineapple = await pineappleDao.readOnePineapple(pineappleId)</text> <br />
                    <text class="tab2">   res.json(pineapple)</text> <br />
                    <text class="tab1">    {"}"}</text> <br />
                    <text class="tab1">  const readAllPineapples = async (req, res) ={">"} {"{"}</text> <br />
                    <text class="tab2">   const pineapples = await pineappleDao.readAllPineapples()</text> <br />
                    <text class="tab2">   res.json(pineapples)</text> <br />
                    <text class="tab1">    {"}"}</text> <br />
                    <text class="tab1"> const updatePineapple = async (req, res) ={">"} {"{"}</text> <br />
                    <text class="tab2">   const {"{"}pineappleId{"}"} = req.___6___</text> <br />
                    <text class="tab2"> const pineapple = req.___7___</text> <br />
                    <text class="tab2">  const status = await pineappleDao.updatePineapple(pineappleId, pineapple)</text> <br />
                    <text class="tab2">   res.json(status)</text> <br />
                    <text class="tab1">    {"}"}</text> <br />
                    <text class="tab1">const removePineapple = async (req, res) ={">"} {"{"}</text> <br />
                    <text class="tab2">   const {"{"}pineappleId{"}"} = req.___6___</text> <br />
                    <text class="tab2">    const status = await pineappleDao.removePineapple(pineappleId)</text> <br />
                    <text class="tab2">    res.json(status)</text> <br />
                    <text class="tab1">  {"}"}</text> <br />
                    <text class="tab1">app.___1___("/api/pineapples", createPineapple)</text> <br />
                    <text class="tab1"> app.___2___("/api/pineapples", ___8___)</text> <br />
                    <text class="tab1"> app.___2___("/api/pineapples/:___5___", ___9___)</text> <br />
                    <text class="tab1">app.___3___("/api/pineapples/:___5___", updatePineapple)</text> <br />
                    <text class="tab1">app.___4___("/api/pineapples/:___5___", removePineapple)</text> <br />
                    {"}"}

                </p>

                <h6>Answer</h6>

                <ol>
                    <li>post</li>
                    <li>get</li>
                    <li>put</li>
                    <li>delete</li>
                    <li>lemonId</li>
                    <li>params</li>
                    <li>body</li>
                    <li>readAllPineapples</li>
                    <li>readOnePineapple</li>
                </ol>


                <h3>Problem 14 = 17</h3>
                <h6>Prompt</h6>
                <p>
                    46:40


                </p>
                <h6>Code</h6>
                <p>
                    <b>nightstandSchema.js</b><br />
                    import mongoose from "mongoose";<br /><br />

                    const nightstandSchema = new mongoose.Schema({"{"}<br />
                    <text class="tab1"> name: {"{"}type: String, unique: true{"}"},</text> <br />
                    <text class="tab1">  price: Number,</text> <br />
                    <text class="tab1">  quantity: Number,</text> <br />
                    <text class="tab1"> description: String,</text> <br />
                    <text class="tab1"> image: String</text> <br />
                    {"}"}, {"{"}collection: "nightstand"{"}"});
                    export default {"{"} nightstandSchema {"}"};<br /><br />


                    <b>nightstandModel.js</b><br />
                    import mongoose from "mongoose";<br />
                    import {"{"} nightstandSchema {"}"} from "./nightstandSchema.js";<br /><br />

                    const nightstandModel = mongoose.model("nightstands", nightstandSchema);<br />
                    export default nightstandModel;<br /><br />


                    <b>nightstandDao.js</b><br />
                    import nightstandModel from "./nightstandModel.js"<br /><br />

                    export const createNightstand = async (nightstand) ={">"} {"{"}<br />
                    <text class="tab1">  const newNightstand = await ___1___.___2___(nightstand);</text> <br />
                    <text class="tab1">  return newNightstand;</text> <br />
                    {"}"}<br />
                    export const findAllNightstands = async () ={">"} {"{"}<br />
                    <text class="tab1"> const nightstands = await ___1___.___3___();</text> <br />
                    <text class="tab1"> return nightstands;</text> <br />
                    {"}"}<br />
                    export const findNightstandById = async (nightstandId) ={">"} {"{"}<br />
                    <text class="tab1"> const nightstand = await ___1___.___4___(nightstandId);</text> <br />
                    <text class="tab1">  return nightstand;</text> <br />
                    {"}"}<br />
                    export const findNightstandByName = async (nightstandName) ={">"} {"{"}<br />
                    <text class="tab1">  const nightstand = await ___1___.___5___({"{"}name: nightstandName{"}"});</text> <br />
                    <text class="tab1"> return nightstand;</text> <br />
                    {"}"}<br />
                    export const ___8___Nightstand = async (nightstandId, nightstand) ={">"} {"{"}<br />
                    <text class="tab1">  const status = await ___1___.___6___(nightstandId, nightstand);</text> <br />
                    <text class="tab1"> return status;</text> <br />
                    {"}"}<br />
                    export const ___9___Nightstand = async (nightstandId) ={">"} {"{"}<br />
                    <text class="tab1"> const status = await ___1___.___7___(nightstandId);</text> <br />
                    <text class="tab1"> return status;</text> <br />
                    {"}"}<br />


                </p>

                <h6>Answer</h6>

                <ol>
                    <li>NightstandModel</li>
                    <li>create</li>
                    <li>find</li>
                    <li>findById</li>
                    <li>findOne</li>
                    <li class="yellow">updateOne</li>
                    <li class="yellow">deleteOne</li>
                    <li>update</li>
                    <li>delete</li>
                </ol>



                <h3>Problem 15 = 18</h3>
                <h6>Prompt</h6>
                <p>
                    49:41
                    consider the following code snippets:

                    fill in the blanks to create a schema that meets the following requirements<b />
                    Fields price,likes and quantity are all numbers <b />
                    field description review and name are all strings<b />
                    if a document is inserted without field quantity then the field is added with an initial value of 0
                    if we try to insert a document without field name then the document is not inserted
                    new documents are stored in a collection called cabinet


                </p>
                <h6>Code</h6>
                <p>
                    <b>paintingSchema.js</b><br />
                    import mongoose from "mongoose";<br />
                    const paintingSchema = new mongoose.___1___({"{"}
                    <text class="tab1"> name: {"{"}___2___: String, ___5___: ___6___{"{"},</text> <br />
                    <text class="tab1"> price: ___4___,</text> <br />
                    <text class="tab1"> description: ___3___,</text> <br />
                    <text class="tab1">  quantity: {"{"}___2___: ___4___, ___7___: 0{"{"},</text> <br />
                    <text class="tab1"> ___9___: Number,</text> <br />
                    <text class="tab1"> ___10___: String,</text> <br />
                    {"{"}, {"{"}___8___: "painting"{"{"});<br />
                    export default paintingSchema;<br />



                </p>

                <h6>Answer</h6>

                <ol>
                    <li>Schema</li>
                    <li>type</li>
                    <li>String</li>
                    <li>Number</li>
                    <li>required</li>
                    <li>true</li>
                    <li class="yellow">default</li>
                    <li>collection</li>
                    <li>likes</li>
                    <li>review</li>
                </ol>

                <h3>Problem 16 = 19</h3>
                <h6>Prompt</h6>
                <p>
                    51:41
                    consider the following code snippets:

                    fill in the blanks to create a schema that meets the following requirements<b />
                    Fields price,likes and quantity are all numbers <b />
                    field description review and name are all strings<b />
                    if a document is inserted without field quantity then the field is added with an initial value of 0


                </p>
                <h6>Code</h6>
                <p>



                    <b>ProductList.js</b><br />
                    import React, {"{"} useState, useEffect {"}"} from "react";<br />
                    import * as productService from "./productService";<br /><br />

                    export const ProductList = () ={">"} {"{"}<br />
                    <text class="tab1">  const [ ___1___, ___2___ ] = ___3___([]);</text> <br />

                    <text class="tab1">  const deleteProduct = async (productId) ={">"} {"{"}</text> <br />
                    <text class="tab2">   await productService.deleteProduct(productId);</text> <br />
                    <text class="tab2">  setProducts(products.___5___((product) ={">"} product.id !== ___8___));</text> <br />
                    {"}"}<br /><br />

                    <text class="tab1"> ___4___(() ={">"} {"{"}</text> <br />
                    <text class="tab2"> const fetchAllProducts = async () ={">"} {"{"}</text> <br />
                    <text class="tab3"> const products = await ___6___.findAllProducts();</text> <br />
                    <text class="tab3"> setProducts(products);</text> <br />
                    <text class="tab2">  {"}"};</text> <br />
                    <text class="tab2">___9___();</text> <br />
                    <text class="tab1">{"}"}, []);</text> <br /><br />

                    <text class="tab1"> return (</text> <br />
                    <text class="tab2"> {"<"}div{">"}</text> <br />
                    <text class="tab3">{"<"}h1{">"}Products List{"<"}/h1{">"}</text> <br />
                    <text class="tab3">{"<"}ul{">"}</text> <br />
                    <text class="tab4">{"{"}products.___7___((product) ={">"} (</text> <br />
                    <text class="tab4">{"<"}li key={"{"}product.id{"}"}{">"}</text> <br />
                    <text class="tab5">{"<"}div{">"}{"{"}product.name{"}"}{"<"}/div{">"}</text> <br />
                    <text class="tab5">{"<"}button onClick={"{"}() ={">"} deleteProduct(product.id){"}"}{">"}Delete{"<"}/button{">"}</text> <br />
                    <text class="tab4">  {"<"}/li{">"}</text> <br />
                    <text class="tab4">)){"}"}</text> <br />
                    <text class="tab3">{"<"}/ul{">"}</text> <br />
                    <text class="tab2">{"<"}/div{">"}</text> <br />
                    <text class="tab1">);</text> <br />
                    {"}"};





                </p>

                <h6>Answer</h6>

                <ol>
                    <li>products</li>
                    <li>setProducts</li>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>filter</li>
                    <li>productService</li>
                    <li>map</li>
                    <li>productId</li>
                    <li>fetchAllProducts</li>
                </ol>

                <h3>Problem 17 = 20</h3>
                <h6>Prompt</h6>
                <p>
                    53:51
                    Consider the following schema

                    section(criteria: string, kiwi: string, peach: string)

                    Which of the following options retrieves documents whose field criteria is equal to "avocado"?


                </p>

                <h6>Answer</h6>

                <ul>
                    <li>section.find({"{"}"avocado": a{"}"})</li>
                    <li>section.find("criteria: 'avocado'")</li>
                    <li class="color">section.find({"{"}criteria: "avocado"{"}"})</li>
                    <li>section.find(criteria: "avocado")</li>
                    <li>section.find([criteria: "avocado"])</li>
                    <li>section.find({"{"}"criteria == 'avocado'"{"}"})</li>
                </ul>


                <h3>Problem 18 = 21</h3>
                <h6>Prompt</h6>
                <p>
                    51:41
                    consider the following code snippets:

                    fill in the blanks to create a schema that meets the following requirements<b />
                    Fields price,likes and quantity are all numbers <b />
                    field description review and name are all strings<b />
                    if a document is inserted without field quantity then the field is added with an initial value of 0


                </p>
                <h6>Code</h6>
                <p>
                    guavaReducer.js<br />
                    import axios from "axios"<br /><br />
                    const guavaSlice = createSlice({"{"}<br />
                    <text class="tab1">  name: "guava",</text> <br />
                    <text class="tab1">  initialState: {"{"}</text> <br />
                    <text class="tab2">   guavas: [],</text> <br />
                    <text class="tab2">   guava: {"{"}{"}"},</text> <br />
                    <text class="tab2">   loading: false,</text> <br />
                    <text class="tab2">   error: null,</text> <br />
                    <text class="tab1">    {"}"},</text> <br />
                    <text class="tab1">  additionalReducers: {"{"}</text> <br />
                    <text class="tab2">   [ createGuavaThunk.___4___]: (___1___, {"{"}___2___{"}"}) ={">"}  {"{"}</text> <br />
                    <text class="tab3">___1___.guavas.push(___2___)</text> <br />
                    <text class="tab2">  {"}"},</text> <br />
                    <text class="tab2">  [ createGuavaThunk.___5___]: (___1___, {"{"}___2___{"}"}) ={">"} {"{"}</text> <br />
                    <text class="tab3">___1___.error = ___2___</text> <br />
                    <text class="tab2">    {"}"},</text> <br />
                    <text class="tab2"> [ createGuavaThunk.___6___]: (___1___, action) ={">"}  {"{"}</text> <br />
                    <text class="tab3">___1___.loading = true</text> <br />
                    <text class="tab2">  {"}"},</text> <br />
                    <text class="tab2">[ readAllGuavasThunk.___4___]: (___1___, ___3___) ={">"}  {"{"}</text> <br />
                    <text class="tab3">___1___.guavas = ___3___.payload</text> <br />
                    <text class="tab2">  {"}"},</text> <br />
                    <text class="tab2">[ readAllGuavasThunk.___5___]: (___1___, ___3___) ={">"}  {"{"}</text> <br />
                    <text class="tab3">___1___.error = ___3___.payload</text> <br />
                    <text class="tab2">    {"}"},</text> <br />
                    <text class="tab2"> [ readAllGuavasThunk.___6___]: (___1___, ___3___) ={">"}  {"{"}</text> <br />
                    <text class="tab3">___1___.loading = true</text> <br />
                    <text class="tab2"> {"}"}</text> <br />
                    <text class="tab1">{"}"}</text> <br />
                    {"}"})<br /><br />
                    export default guavaSlice.reducer<br />
                </p>

                <h6>Answer</h6>

                <ol>
                    <li>state</li>
                    <li>payload</li>
                    <li>action</li>
                    <li>fulfilled</li>
                    <li>rejected</li>
                    <li>pending</li>
                </ol>
            </div>
        </div>
    );
}

export default Exam;