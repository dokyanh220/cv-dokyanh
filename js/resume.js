// Modal cho ảnh chứng chỉ - style LinkedIn media viewer
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");

  document.querySelectorAll('.modal-trigger').forEach(function (img) {
    img.onclick = function () {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.getAttribute('data-title') || '';
      modalTitle.textContent = img.getAttribute('data-title') || "Phương tiện truyền thông";
      modalDesc.innerText = img.closest('.cert').getAttribute('data-desc');
    };
  });

  closeModal.onclick = function () {
    modal.style.display = "none";
    modalImg.src = "";
    modalDesc.innerText = "";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
      modalDesc.innerText = "";
    }
  };
});