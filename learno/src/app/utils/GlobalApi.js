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
      completedChapters {
        ... on CompletedChapter {
          id
          chapId
        }
      }
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



const GetCompletedChaps= async(id,chapId)=>{
  const query =gql`
  mutation MyMutation {
    updateUserEnrollcourse(
      data: {completedChapters: {create: {CompletedChapter: {data: {chapId: "`+chapId+`"}}}}}
      where: {id: "`+id+`"}
    ) {
      id
      courseId
    courseList {
      name
    }
    }
    publishUserEnrollcourse(where: {id: "`+id+`"}) {
      id
    }
  }
  
  
  `
const result6 = await request(MasterURL, query);
return result6;
}



const GetProgressList= async(email)=>{
  const query =gql`
  query MyQuery {
    userEnrollcourses(where: {userEmail: "`+email+`"}) {
      completedChapters {
        ... on CompletedChapter {
          id
        }
      }
      courseList {
        id
        author
        free
        name
        slugId
        totalChapters
        banner {
          id
          url
        }
        discription
        chapter {
          ... on Chapter {
            id
            name
          }
        }
        author
      }
    }
  }

  `
const result7 = await request(MasterURL, query);
return result7;
}


const AddNewMember = async(email,paymentid)=>{
  const query =gql`
  mutation MyMutation {
    createMembership(data: {paymentid: "`+paymentid+`", email: "`+email+`", active: true}) {
      id
    }
    publishManyMemberships(to: PUBLISHED) {
      count
  }
}
  `
const result8 = await request(MasterURL, query);
return result8;
}


const checkmembership = async(email)=>{
  const query =gql`
 
  query MyQuery {
    memberships(where: {email: "`+email+`"}) {
      email
      id
      paymentid
      createdAt
    }
  }

  `
const result9 = await request(MasterURL, query);
return result9;
}


export default { 
    getAllCourseList,
    getsideBar,
    getCoursePrev,
    enrollTocourse,
    CheckEnrollment,
    GetUserEnrolledDeets,
    GetCompletedChaps,
    GetProgressList,
    AddNewMember,
    checkmembership
}