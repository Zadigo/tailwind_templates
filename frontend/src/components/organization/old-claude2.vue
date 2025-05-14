<template>
  <table class="border-collapse text-center w-full">
    <tbody>
      <!-- 1) Node Row -->
      <tr>
        <td :colspan="colspan">
          <div
            class="inline-block p-3 border border-slate-300 rounded-md cursor-pointer"
          >
            <slot name="node" :node="node">
              {{ node.label }}
            </slot>
            <button
              v-if="hasChildren"
              class="ml-2 text-sm"
              @click.stop="toggleChildVisibility()"
            >
              <ArrowDown :class="{ 'rotate-180': expanded }" />
            </button>
          </div>
        </td>
      </tr>

      <!-- 2) Vertical line down from this node -->
      <tr v-if="hasChildren && expanded">
        <td :colspan="colspan">
          <div class="mx-auto w-0 h-4 border-l-2 border-red-400"></div>
        </td>
      </tr>

      <!-- 3) Horizontal connectors to children -->
      <tr v-if="hasChildren && expanded">
        <!-- single child: just another vertical line -->
        <template v-if="childrenCount === 1">
          <td :colspan="colspan">
            <div class="mx-auto w-0 h-4 border-l-2 border-red-400"></div>
          </td>
        </template>

        <!-- multiple children: one horizontal segment per child-slot -->
        <template v-else>
          <td
            v-for="(child, idx) in node.children"
            :key="child.id"
            :colspan="2"
          >
            <div class="h-0 border-t-2 border-red-400"></div>
          </td>
        </template>
      </tr>

      <!-- 4) Child nodes themselves -->
      <tr v-if="hasChildren && expanded">
        <td
          v-for="child in node.children"
          :key="child.id"
          colspan="2"
          class="align-top"
        >
          <OrganizationChartNode
            :node="child"
            @toggle="onChildToggle"
          >
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
import { computed, ref } from 'vue';
import { ArrowDown } from 'lucide-vue-next';
import OrganizationChartNode from './OrganizationChartNode.vue';

interface OrganizationNode {
  id: string | number;
  label: string;
  children?: OrganizationNode[];
}

const props = defineProps<{ node: OrganizationNode }>();
const emit = defineEmits<{
  (e: 'toggle', node: OrganizationNode): void;
}>();

// State to track expanded/collapsed
const expanded = ref(true);
function toggleChildVisibility() {
  expanded.value = !expanded.value;
  emit('toggle', props.node);
}

const hasChildren = computed(
  () => !!(props.node.children && props.node.children.length)
);
const childrenCount = computed(
  () => props.node.children?.length ?? 0
);

// same leaf-counting logic to compute colspan
const colspan = computed(() => {
  if (!hasChildren.value) return 1;

  const countLeaves = (n: OrganizationNode): number =>
    n.children && n.children.length
      ? n.children.reduce((sum, c) => sum + countLeaves(c), 0)
      : 1;

  return countLeaves(props.node) * 2;
});

function onChildToggle(childNode: OrganizationNode) {
  emit('toggle', childNode);
}
</script>
