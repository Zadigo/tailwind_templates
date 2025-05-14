<template>
  <div class="org-chart">
    <table class="border-collapse text-center w-full">
      <tbody>
        <!-- Node Row -->
        <tr>
          <td :colspan="colspan" class="px-2">
            <div 
              class="inline-block p-3 border border-gray-300 rounded-md cursor-pointer bg-white hover:bg-gray-50"
              @click="$emit('select', node)"
            >
              <slot name="node" :node="node">
                {{ node.label }}
              </slot>

              <button 
                v-if="hasChildren" 
                class="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                @click.stop="toggleExpanded"
              >
                <ArrowDown v-if="expanded" class="w-4 h-4" />
                <ArrowRight v-else class="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>

        <!-- Vertical Connector -->
        <tr v-if="hasChildren && expanded">
          <td :colspan="colspan" class="h-6 relative">
            <div class="absolute left-1/2 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>
          </td>
        </tr>

        <!-- Horizontal Connectors -->
        <tr v-if="hasChildren && expanded && childrenCount > 1">
          <td :colspan="colspan" class="relative h-4">
            <!-- Middle vertical line (extension) -->
            <div class="absolute left-1/2 top-0 h-1/2 border-l-2 border-gray-300 transform -translate-x-1/2"></div>
            
            <!-- Horizontal line -->
            <div class="absolute top-1/2 border-t-2 border-gray-300 w-full"></div>
            
            <!-- Child vertical connectors -->
            <div 
              v-for="(child, index) in node.children" 
              :key="index"
              class="absolute top-1/2 h-1/2 border-l-2 border-gray-300"
              :style="{
                left: `${(((index + 0.5) / childrenCount) * 100)}%`,
                transform: 'translateX(-50%)'
              }"
            ></div>
          </td>
        </tr>

        <!-- Single Child Connector -->
        <tr v-else-if="hasChildren && expanded">
          <td :colspan="colspan" class="h-4 relative">
            <div class="absolute left-1/2 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>
          </td>
        </tr>

        <!-- Child Nodes -->
        <tr v-if="hasChildren && expanded">
          <td 
            v-for="(child, index) in node.children" 
            :key="index" 
            :colspan="getChildColspan(child, index)"
            class="align-top pt-2"
          >
            <OrganizationChart 
              :node="child" 
              @select="$emit('select', $event)"
              :expandedNodes="expandedNodes"
              @toggle="$emit('toggle', $event)"
            >
              <template #node="slotProps">
                <slot name="node" :node="slotProps.node"></slot>
              </template>
            </OrganizationChart>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowDown, ArrowRight } from 'lucide-vue-next'

export interface OrganizationNode {
  id?: string | number
  label: string
  children?: OrganizationNode[]
}

const props = defineProps<{
  node: OrganizationNode
  expandedNodes?: Set<string | number>
}>()

const emit = defineEmits<{
  (e: 'select', node: OrganizationNode): void
  (e: 'toggle', nodeId: string | number): void
}>()

// If expandedNodes is not provided from parent, use local state
const localExpandedNodes = ref(new Set<string | number>())

const hasChildren = computed(() => props.node.children && props.node.children.length > 0)
const childrenCount = computed(() => props.node.children?.length || 0)

// Get expanded state from either props or local state
const expanded = computed(() => {
  const nodeId = props.node.id || props.node.label
  if (props.expandedNodes) {
    return props.expandedNodes.has(nodeId)
  }
  return localExpandedNodes.value.has(nodeId)
})

// Calculate the total number of leaf nodes
const totalLeaves = computed(() => {
  const countLeaves = (node: OrganizationNode): number => {
    if (!node.children || node.children.length === 0) {
      return 1
    }
    return node.children.reduce((sum, child) => sum + countLeaves(child), 0)
  }
  return countLeaves(props.node)
})

// Calculate colspan for current node
const colspan = computed(() => {
  return Math.max(totalLeaves.value * 2, 1)
})

// Calculate colspan for each child based on its leaves
function getChildColspan(child: OrganizationNode, index: number): number {
  const countLeaves = (node: OrganizationNode): number => {
    if (!node.children || node.children.length === 0) {
      return 1
    }
    return node.children.reduce((sum, child) => sum + countLeaves(child), 0)
  }
  
  const leaves = countLeaves(child)
  return leaves * 2
}

// Toggle expanded state
function toggleExpanded() {
  const nodeId = props.node.id || props.node.label
  
  if (props.expandedNodes) {
    // Use parent's state management
    emit('toggle', nodeId)
  } else {
    // Use local state management
    if (localExpandedNodes.value.has(nodeId)) {
      localExpandedNodes.value.delete(nodeId)
    } else {
      localExpandedNodes.value.add(nodeId)
    }
  }
}
</script>

<style scoped>
.org-chart {
  width: 100%;
  overflow-x: auto;
}
</style>
