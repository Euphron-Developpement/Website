<template>
  <div class="container">
    <div class="header">
      <h1>Liste des tags</h1>
      <button class="add-btn" @click="openAddModal()">Ajouter un tag</button>
    </div>

    <div class="tags-container" v-if="tags?.length > 0">
      <div v-for="tag in tags" :key="tag.id" class="tag" :style="{ backgroundColor: tag.color }">
        <i v-if="tag.icon" :class="tag.icon" class="tag-icon"></i>
        <span class="tag-label">{{ tag.label }}</span>
        <div class="tag-actions">
          <button class="edit-btn" @click.stop="openEditModal(tag)" title="Modifier le tag">✎</button>
          <button class="delete-btn" @click.stop="deleteTagHandler(tag.id)" title="Supprimer le tag">×</button>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">Aucun tag disponible</div>

    <!-- Modal pour ajouter un tag -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>{{ isEditing ? 'Modifier le tag' : 'Ajouter un tag' }}</h2>
        <form @submit.prevent="saveTagHandler">
          <div class="form-group">
            <label for="label">Libellé</label>
            <input id="label" v-model="newTag.label" required type="text">
          </div>

          <div class="form-group">
            <label for="color">Couleur</label>
            <input id="color" v-model="newTag.color" type="color">
          </div>

          <div class="form-group">
            <label for="icon">Icône (classe CSS)</label>
            <input id="icon" v-model="newTag.icon" type="text" placeholder="fa fa-tag">
          </div>

          <div class="form-actions">
            <button type="button" @click="showModal = false" class="btn-cancel">Annuler</button>
            <button type="submit" class="btn-save">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Tag} from "~/entities/tags";
import {findAllTags, deleteTag, createTag, updateTag} from "~/utils/api/route/tags";
import {ref} from "vue";

let data = [];
await findAllTags().then((reponse) => {
  data = reponse.data;
});
const tags = ref<Tag[]>(data);

const showModal = ref(false);
const isEditing = ref(false);
const editingTagId = ref<number | null>(null);
const newTag = ref({
  label: '',
  color: '#3498db',
  icon: ''
});

const openAddModal = () => {
  isEditing.value = false;
  editingTagId.value = null;
  newTag.value = {
    label: '',
    color: '#3498db',
    icon: ''
  };
  showModal.value = true;
};

const openEditModal = (tag: Tag) => {
  isEditing.value = true;
  editingTagId.value = tag.id;
  newTag.value = {
    label: tag.label,
    color: tag.color,
    icon: tag.icon || ''
  };
  showModal.value = true;
};

const saveTagHandler = async () => {
  try {
    if (isEditing.value && editingTagId.value !== null) {
      // Mise à jour du tag existant
      const response = await updateTag(editingTagId.value, newTag.value);
      if (response) {
        const index = tags.value.findIndex(tag => tag.id === editingTagId.value);
        if (index !== -1) {
          tags.value[index] = {...tags.value[index], ...newTag.value};
        }
        showModal.value = false;
      }
    } else {
      // Création d'un nouveau tag
      const response = await createTag(newTag.value);
      if (response) {
        tags.value.push(response);
        showModal.value = false;
      }
    }

    // Réinitialiser le formulaire
    newTag.value = {
      label: '',
      color: '#3498db',
      icon: ''
    };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du tag :', error);
  }
};

const deleteTagHandler = async (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce tag ?')) {
    try {
      await deleteTag(id);
      if (tags.value) {
        tags.value = tags.value.filter(tag => tag.id !== id);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du tag :', error);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.tag {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag-icon {
  margin-right: 6px;
}

.tag-label {
  font-size: 14px;
}

.delete-btn {
  .tag-actions {
    display: flex;
    margin-left: 6px;
  }

  .edit-btn,
  .delete-btn {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    margin-left: 4px;
  }

  .edit-btn:hover,
  .delete-btn:hover {
    background: rgba(0, 0, 0, 0.4);
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  max-width: 90%;
}
</style>
