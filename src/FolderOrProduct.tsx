import { Link, Route, Routes, useParams } from 'react-router-dom';
import hierarchy from './assets/hierarchy.json';
import AnimatedLayout from './AnimatedLayout';

const FolderOrProduct = () => {
    const { id } = useParams();
    var node = getNode(hierarchy, id as string);
    if (node) {
        return (
            <AnimatedLayout location={node.id}>
                <div>
                    <Routes>
                        <Route path={`:id/*`} element={<FolderOrProduct />} />
                    </Routes>
                    {node.children.length === 0 ?
                        <h3>Product {node.name}</h3>
                        :
                        <>
                            <h3>Folder {node.name}</h3>
                            <div>
                                {node.children.map((node) => (
                                    <div key={node.id}>
                                        <Link to={node.id}>{node.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                </div>
            </AnimatedLayout>
        );
    } else {
        return <div>Not Found</div>
    }
};
interface CatalogNode {
    id: string;
    name: string;
    image?: string;
    keywords?: string;
    children: CatalogNode[]
}
function getNode(hierarchy: CatalogNode, id: string): CatalogNode | null {
    if (hierarchy.id == id) {
        return hierarchy;
    } else {
        if (Array.isArray(hierarchy.children) && hierarchy.children.length > 0) {
            var result = null;
            for (var i = 0; i < hierarchy.children.length; i++) {
                result = getNode(hierarchy.children[i], id);
                if (result !== null) return result;
            }
        }
    }
    return null;
}

export default FolderOrProduct;