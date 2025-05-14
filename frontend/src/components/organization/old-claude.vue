<!-- OrganizationChartNode.vue -->
<template>
  <table class="org-table">
    <tbody>
      <!-- Node row -->
      <tr>
        <td :colspan="colspan" class="org-cell">
          <div
            class="org-node"
            :class="{ selected: isSelected }"
            @click="onClickNode"
          >
            <!-- Render node label or slot -->
            <slot name="node" :node="node">
              {{ node.label }}
            </slot>

            <!-- Toggle button -->
            <button
              v-if="toggleable"
              class="org-toggle"
              @click.stop="toggle()"
            >
              {{ expanded ? "▾" : "▸" }}
            </button>
          </div>
        </td>
      </tr>

      <!-- Connectors -->
      <tr v-if="hasChildren && expanded">
        <td :colspan="colspan" class="org-connector-down"></td>
      </tr>
      
      <tr v-if="hasChildren && expanded">
        <template v-if="childrenCount === 1">
          <td :colspan="2" class="org-connector-down"></td>
        </template>
        <template v-else>
          <td
            v-for="(child, idx) in node.children"
            :key="child.id"
            class="org-connector-horizontal"
            :style="horizontalStyle(idx)"
          ></td>
        </template>
      </tr>

      <!-- Child nodes -->
      <tr v-if="hasChildren && expanded">
        <td
          v-for="child in node.children"
          :key="child.id"
          :colspan="2"
          class="org-child-cell"
        >
          <OrganizationChartNode
            :node="child"
            :selectedKeys="selectedKeys"
            :toggleable="toggleable"
            @toggle="onChildToggle"
            @select="onChildSelect"
          >
            <!-- propagate the same node slot -->
            <template #node="{ node }">
              <slot name="node" :node="node" />
            </template>
          </OrganizationChartNode>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import OrganizationChartNode from './OrganizationChartNode.vue'; // recursive

interface OrgNode {
  id: string | number;
  label: string;
  children?: OrgNode[];
}

const props = defineProps<{
  node: OrgNode;
  selectedKeys?: Record<string | number, boolean>;
  toggleable?: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle', node: OrgNode): void;
  (e: 'select', node: OrgNode): void;
}>();

const hasChildren = computed(() => !!(props.node.children && props.node.children.length));
const childrenCount = computed(() => props.node.children?.length ?? 0);
const expanded = computed(() => {
  // simple internal toggling; you could also drive this from parent via props
  return !_collapsed.has(props.node.id);
});
const isSelected = computed(() => !!props.selectedKeys?.[props.node.id]);

// track collapsed state internally
const _collapsed = new Set<string | number>();

function toggle() {
  if (_collapsed.has(props.node.id)) _collapsed.delete(props.node.id);
  else _collapsed.add(props.node.id);
  emit('toggle', props.node);
}

function onClickNode() {
  emit('select', props.node);
}

function onChildToggle(node: OrgNode) {
  emit('toggle', node);
}
function onChildSelect(node: OrgNode) {
  emit('select', node);
}

// colspan = number of leaf-descendant slots * 2 (for connectors)
const colspan = computed(() => {
  if (!hasChildren.value) {
    return 1;
  }
  // count total leaf slots
  const countLeaves = (n: OrgNode): number =>
    n.children && n.children.length
      ? n.children.reduce((sum, c) => sum + countLeaves(c), 0)
      : 1;
  return countLeaves(props.node) * 2;
});

// simple style for horizontal connectors: place line segments under each child slot
function horizontalStyle(idx: number) {
  return {
    /* e.g. width or border styling could go here; placeholder */
  };
}
</script>

<style scoped>
.org-table {
  border-collapse: collapse;
  text-align: center;
}
.org-node {
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
}
.org-node.selected {
  background-color: #def;
}
.org-toggle {
  margin-left: 0.5em;
  font-size: 0.8em;
  cursor: pointer;
  background: none;
  border: none;
}
.org-connector-down td,
.org-connector-down { /* vertical line styling */
  border-left: 1px solid #333;
  height: 1em;
}
.org-connector-horizontal {
  border-top: 1px solid #333;
  height: 1em;
  /* adjust width if needed */
}
.org-child-cell {
  vertical-align: top;
}
</style>
