<template>
  <table class="border-collapse text-center">
    <tbody>
      <!-- Node Row -->
      <tr id="node-row" :colspan="colspan">
        <td>
          <div id="node" class="inline-block p-3 border-1 border-slate-100 rounded-md cursor-pointer">
            <slot name="node" :node="node">
              {{ node.label }}
            </slot>

            <Button variant="ghost" size="sm">
              <ArrowDown />
            </Button>
          </div>
        </td>
      </tr>

      <!-- Vertical -->
      <tr v-if="hasChildren" id="connector">
        <td :colspan="colspan" class="border-l-2 border-l-red-400 h-10" />
      </tr>

      <!-- Horizontal -->
      <tr v-if="hasChildren" id="connector">
        <template v-if="childrenCount === 1">
          <td :colspan="2" class="border-l-2 border-l-red-400 h-10" />
        </template>

        <template v-else>
          <td v-for="(child, i) in node.children" :key="i" :data-value="child.label" class="border-t-2 border-t-red-400 h-10" />
        </template>
      </tr>

      <!-- Child Nodes -->
      <tr v-if="hasChildren" id="children">
        <td v-for="(child, i) in node.children" id="child" :key="i" :data-value="child.label" :colspan="2" class="align-top">
          <OrganizationChart :node="child" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { OrganizationNode } from '@/components/organization'
import { ArrowDown } from 'lucide-vue-next'

const props = defineProps<{ node: OrganizationNode }>()

const hasChildren = computed(() => props.node.children && props.node.children.length > 0)
const childrenCount = computed(() => props.node.children ? props.node.children.length : 0)

const colspan = computed(() => {
  if (!hasChildren.value) {
    return 1
  } else {
    const countLeaves = (node: OrganizationNode): number => {
      if (node.children) {
        return node.children.reduce((sum, c) => sum + countLeaves(c), 0)
      } else {
        return 1
      }
    }
    return countLeaves(props.node) * 2
  }
})
</script>
