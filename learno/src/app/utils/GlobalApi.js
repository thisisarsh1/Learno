const { default:request, gql } = require("graphql-request");
const MasterURL ="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"


const getAllCourseList =async()=>{
const query = gql
`
query CourseLists {
    courseLists {
      discription
      free
      name
      totalChapters
      updatedAt
      author
      slugId
      banner {
        url
      }
      createdBy {
        id
      }
      chapter {
        ... on Chapter {
          id
          name
          chapterNumber
          video {
            url
          }
        }
      }
      tags
    }
  }
  
    
`
const result = await request(MasterURL, query);
return result;
}



const getsideBar= async()=>{
  const query =gql`
  query SideBarItem {
    sideBars {
      banner {
        id
        url
      }
      id
      name
      url
    }
  }
  
  
  `
const result1 = await request(MasterURL, query);
return result1;
}



const getCoursePrev= async(CourseId)=>{
  const query =gql`
  
  query MyQuery {
    courseList(where: {slugId:"`+CourseId+`"}) {
      slugId
      tags
      totalChapters
      updatedAt
      name
      id
      free
      discription
      author
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
          smallDisc
        }
      }
    }
  }
  
  
  `
const result2 = await request(MasterURL, query);
return result2;
}



export default { 
    getAllCourseList,
    getsideBar,
    getCoursePrev
}