// 선택 버튼의 시각적 상태만 변경하는 데모입니다.
document.querySelectorAll('.choice').forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.querySelectorAll('.choice').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
    });
});
