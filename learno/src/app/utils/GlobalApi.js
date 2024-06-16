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
      banner {
        id
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          smallDisc
          video {
            url
          }
          
        }
      }
    }
  }
  
  
  `
const result2 = await request(MasterURL, query);
return result2;
}



const enrollTocourse= async(CourseId,email)=>{
  const query =gql`
  
  mutation MyMutation {
    createUserEnrollcourse(
      data: {courseId: "`+CourseId+`", userEmail: "`+email+`", courseList: {connect: {slugId: "`+CourseId+`"}}}
    ) {
      courseId
      id
    }
    publishManyUserEnrollcoursesConnection(where: {}) {
      edges {
        node {
          id
        }
      }
    }
  }
  
  
  `
const result3 = await request(MasterURL, query);
return result3;
}


const CheckEnrollment= async(CourseId,email)=>{
  const query =gql`
  query MyQuery {
    userEnrollcourses(where: {courseId: "`+CourseId+`", userEmail: "`+email+`"}) {
      id
    }
  }
  `
const result4 = await request(MasterURL, query);
return result4;
}


const GetUserEnrolledDeets= async(id,email)=>{
  const query =gql`
  query MyQuery {
    userEnrollcourses(
      where: {id: "`+id+`", userEmail: "`+email+`"}
    ) {
      id
      userEmail
      courseList {
        author
        chapter {
          ... on Chapter {
            id
            name
            smallDisc
            video {
              url
            }
          }
        }
        free
      totalChapters
      slugId
      tags
      name
      banner {
        id
        url
      }
     
      }
    }
  }
  `
const result5 = await request(MasterURL, query);
return result5;
}



export default { 
    getAllCourseList,
    getsideBar,
    getCoursePrev,
    enrollTocourse,
    CheckEnrollment,
    GetUserEnrolledDeets
}