const barangAnakReducer = async (barang, action) => {
    switch (action.type) {
        case 'delete': {
            const updatedBarang = barang.filter(data => data.id === barang.id);
            return updatedBarang;
        };

        default: {
            throw new Error(`unknown action: ${action.type}`);
        }
    }
}

export default barangAnakReducer;