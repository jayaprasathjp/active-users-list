let users = [{
    id:"1",
    name: "admin",
    email: "admin@gmail.com",
    password: "admin",
    login:"0000-00-00 00:00:00",
    logout:"0000-00-00 00:00:00",
    role:"admin"
},{
    id:"2",
    name: "John",
    email: "john@gmail.com",
    password: "john",
    login:"0000-00-00 00:00:00",
    logout:"0000-00-00 00:00:00",
    role:"user"
},
{id:"3",
    name: "jp",
    email: "jayaprasathjp44@gmail.com",
    password: "1",
    login:"0000-00-00 00:00:00",
    logout:"0000-00-00 00:00:00",
    role:"user"
}];
let uid=4;
export const dashboard = (req, res) => {
    let online=0,offline=0,away=0;
    users.forEach(user =>{
        console.log(user);
        const [logindate, logintime] = user.login.split(' ');
        const indate = logindate.replace(/-/g, '');
        const intime = logintime.replace(/:/g, '');
        const [logoutdate, logouttime] = user.logout.split(' ');
        const outdate = logoutndate.replace(/-/g, '');
        const outtime = logouttime.replace(/:/g, '');
        if(indate==outdate&&outtime<intime){

        }else if(){

        }else{
            
        }
    })
   res.json({total:online+offline+away,online:online,offline:offline,away:away})
  };
export const register = (req, res) => {
  const user = req.body;
  users.push({ ...user,id: String(uid),role:"user",login:"",logout:""});
  uid++
  res.json(users);
};
export const login = (req, res) => {
    const {email,password}=req.body;
        const user = users.find(user =>{ if(user.email === email && user.password === password){
            let currentDateTime = new Date();
let formattedDateTime = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');
users[user.id-1].login=formattedDateTime; 
            return true;
        }
    return false;});
    console.log(user);
        if(user)
            res.status(200).json(user);
        else
          res.status(400).json({message:"Invalid email or password"});
    
};
export const logout = (req, res) => {
    const {id}=req.params;
    let currentDateTime = new Date();
    let formattedDateTime = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');
    users[id-1].logout=formattedDateTime;  
    console.log(users[id-1]);
        res.status(200).json({message:"success"});
};

