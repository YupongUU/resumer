<template>
  <div id="resumePreview">
    <section data-name="profile" v-show="resume.profile">
      <h1>
        {{resume.profile['姓名']}}
      </h1>
      <h2>
        {{resume.profile['职位']}}
      </h2>
      <p><small>{{resume.profile['城市']}}</small>
        <small>{{resume.profile['生日']}}</small></p>

    </section>
    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item['公司']}}</h3>
          <p>{{item['介绍']}}</p>
        </li>

      </ol>
    </section>
    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item['学校']}}
          <span>-{{item['专业']}}</span></h3>
        </li>
      </ol>
    </section>

    <section data-name="awards" v-show="resume.awards">
    <h2>获奖情况</h2>
    <ol>
    <li v-for="item in resume.awards">
    <h3>{{item['奖项']}}</h3>
    <p>{{item['介绍']}}</p>
    </li>
    </ol>
    </section>
    <section data-name="contacts" v-show="resume.contacts">
    <h2>联系方式</h2>
   
    <table>
        <tr v-for="item in resume.contacts">
         <td>{{item['联系方式']}}</td>
          <td> {{item['具体内容']}} </td>
        </tr>
      </table>
    </li>
   

    </section>
  </div>
</template>

<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume() {
        return this.$store.state.resume
      }
    },
    created() {
      console.log(this.resume)
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">
  #resumePreview {
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    padding: 2em;
    background: #ffffff;
    color: #333;
    line-height: 1.2;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    overflow:scroll;
    * {
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal;
    }
    ol {
      list-style: none;
    }
    section+section {
      margin-top: 2em;
    }
    p {
      white-space: pre-line;
    }
    section {
      >h2:first-child {
        background: #ddd;
        display: inline-block;
        padding: .2em;
        margin-bottom: .5em;
      }
    }
    section[data-name="profile"] {
      >h1 {
        margin: .1em 0;
        font-size: 4em;
      }
    }
    section[data-name="workHistory"] {
      li+li {
        margin-top: 1em;
      }
      li {
        h3 {
          border-bottom: 1px solid #999;
          padding-bottom: .3em;
          margin-bottom: .3em;
        }
      }
    }
    section[data-name="education"] {
      li {
        line-height: 1.5;
      }
    }
  }

</style>
