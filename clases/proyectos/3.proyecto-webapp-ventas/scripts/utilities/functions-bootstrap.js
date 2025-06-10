"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cerrarModal = cerrarModal;
function cerrarModal(selector) {
    const modal = bootstrap.Modal.getInstance(document.querySelector(selector));
    if (modal) {
        modal.hide();
    }
}
