<template>
  <div>
    <input @change="upload" ref="file" type="file" />
    <div class="aside">
      <div class="i" v-for="(item, i) in all" v-bind:key="i" @click="select(i)">{{ item.file }}</div>
    </div>
    <div ref="echarts" class="echarts"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      nodes: [],
      edges: [],
      all: undefined,
    };
  },
  mounted() {},
  methods: {
    upload(input) {
      var that = this;
      let r = new FileReader();
      r.readAsText(input.target.files[0]);
      r.onload = function () {
        that.all = JSON.parse(this.result).filter((e) => e.nodes.length);
      };
    },
    select(i) {
      if (this.all) {
        console.log(this.all);
        this.nodes = this.all[i].nodes;
        this.edges = this.all[i].edges;
        this.draw();
      }
    },
    draw() {
      console.log(this.nodes, this.edges);
      if (!this.chart) {
        this.chart = this.$echarts.init(this.$refs.echarts);
      }
      var option;
      option = {
        tooltip: {
          formatter: function (item) {
            var show_html = '<ul style="text-align:left">';
            if (item.dataType == "node") {
              show_html = show_html + "<li>ID: " + item.name + "</li>";
              show_html = show_html + "<li>NAME: " + item.value.text + "</li>";
              show_html = show_html + "<li>LOC: " + item.value.loc + "</li>";
            } else if (item.dataType == "edge") {
              return item.data.type + ": " + item.data.fromTo.from + "->" + item.data.fromTo.to;
            }
            return show_html + "</ul>";
          },
          trigger: "item",
          position: "right",
        },
        legend: {
          // selectedMode: "multi",
          right: 20,
          top: 20,
          orient: "vertical",
          data: ["source", "page", "func", "sink", "source, sink"],
        },
        color: ["#ef5151", "#ff9912", "#d4ee43", "#56b5db", "#4cd933", "#c9c3c3", "#9295de"],
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            symbolSize: 20,
            roam: true,
            draggable: true,
            categories: [{ name: "source" }, { name: "page" }, { name: "func" }, { name: "sink" }, { name: "source, sink" }],
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [5, 9],
            edgeLabel: {
              fontSize: 20,
              // formatter: "data",
            },
            emphasis: {
              focus: "adjacency",
            },
            select: {
              itemStyle: {
                borderColor: "#000",
                borderWidth: 2,
                borderType: "solid",
              },
            },
            selectedMode: "single",
            layout: "force",
            force: {
              repulsion: 1000,
              gravity: 0.1,
              edgeLength: 30,
              layoutAnimation: true,
            },
            lineStyle: {
              opacity: 0.9,
              width: 3,
              curveness: 0,
            },
            data: this.nodes,
            links: this.edges,
          },
        ],
      };
      option && this.chart.setOption(option);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  float: left;
  height: 1200px;
  width: 1200px;
}
.aside {
  float: left;
  width: 600px;
  overflow: scroll;
}
.i:hover {
  background-color: rgb(182, 228, 200);
}
</style>
